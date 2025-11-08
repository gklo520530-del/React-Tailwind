/*
MAX I — 前端樣板與專案說明 (單文件範例)
說明：此檔案為單一-file React 範例（可放在 src/App.jsx），示範 Home、Auth、Wallet、Market、Admin 五個頁面路由與簡單組件。
使用：Tailwind CSS (已安裝並設定)。此範例重點在結構與 UI 布局，實務上請配合後端 API 與 Auth flow。
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">MI</div>
          <div>
            <div className="font-semibold">MAX I</div>
            <div className="text-xs text-gray-500">讓加密貨幣交易更安全、更透明、更簡單</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm">首頁</Link>
          <Link to="/market" className="text-sm">交易市場</Link>
          <Link to="/wallet" className="text-sm">錢包</Link>
          <Link to="/admin" className="text-sm">後台</Link>
          <Link to="/auth" className="px-4 py-2 bg-indigo-600 text-white rounded">立即註冊</Link>
        </nav>
      </div>
    </header>
  )
}

function Home(){
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold">MAX I — 專業交易投資買賣平台</h1>
          <p className="mt-4 text-gray-700">安全、透明、合規的 P2P 加密貨幣交易平台</p>
          <ul className="mt-6 space-y-3">
            <li>• 冷熱錢包分離與提款白名單</li>
            <li>• Escrow 託管保護買賣雙方</li>
            <li>• KYC / AML 合規流程</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Link to="/auth" className="px-5 py-3 bg-indigo-600 text-white rounded">立即註冊</Link>
            <Link to="/market" className="px-5 py-3 border rounded">開始交易</Link>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h3 className="font-semibold">新手三步驟</h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700">
            <li>註冊帳號</li>
            <li>完成 KYC 與充值</li>
            <li>開始下單買賣</li>
          </ol>

          <div className="mt-6">
            <h4 className="font-medium">透明手續費</h4>
            <div className="mt-2 text-sm text-gray-600">交易手續費：買方 0.2% / 賣方 0.2%（示例，可在後台調整）</div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded">
          <h5 className="font-semibold">錢包管理</h5>
          <p className="text-sm text-gray-600">BTC、USDT (可擴展)</p>
        </div>
        <div className="p-4 border rounded">
          <h5 className="font-semibold">交易市場</h5>
          <p className="text-sm text-gray-600">P2P 市場 + Escrow 託管</p>
        </div>
        <div className="p-4 border rounded">
          <h5 className="font-semibold">KYC & AML</h5>
          <p className="text-sm text-gray-600">身份驗證、人臉比對、審核工作流</p>
        </div>
      </section>
    </main>
  )
}

function Auth(){
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-semibold">註冊 / 登入</h2>
      <p className="text-sm text-gray-500">支援 Email / 手機註冊，登入需密碼 + 2FA</p>
      <div className="mt-4 space-y-3">
        <input placeholder="Email 或手機" className="w-full p-3 border rounded" />
        <input placeholder="密碼" type="password" className="w-full p-3 border rounded" />
        <button className="w-full p-3 bg-indigo-600 text-white rounded">下一步</button>
      </div>
    </div>
  )
}

function Wallet(){
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">錢包管理</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-medium">BTC 餘額</h4>
          <div className="text-lg">可用：0.1234 BTC</div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-2 border rounded">充值 (生成地址)</button>
            <button className="px-3 py-2 border rounded">提領</button>
          </div>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-medium">USDT 餘額</h4>
          <div className="text-lg">可用：500 USDT</div>
        </div>
      </div>
    </div>
  )
}

function Market(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">交易市場</h2>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 p-4 border rounded">
          <h4 className="font-medium">訂單列表 (示意)</h4>
          <div className="mt-3 text-sm text-gray-600">即時買單賣單會由 WebSocket 推送更新</div>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-medium">下單表單</h4>
          <input placeholder="金額" className="w-full p-2 border rounded mt-2" />
          <button className="mt-3 w-full p-2 bg-indigo-600 text-white rounded">下單</button>
        </div>
      </div>
    </div>
  )
}

function Admin(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">管理後台 (示意)</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">用戶管理</div>
        <div className="p-4 border rounded">交易監控</div>
        <div className="p-4 border rounded">手續費設定</div>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/market" element={<Market/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  )
}

/*
後端 / 資料庫 簡要草圖 (README)

建議技術堆疊：
- 前端：React + React Router + Tailwind
- 後端：Node.js (NestJS 或 Express) 或 Go (Gin)；Auth 與微服務化設計
- DB：Postgres (主要用戶/訂單/帳務)、Redis (快取、session)、Mongo (KYC/檔案)
- 錢包節點：比特幣全節點 / USDT (OMNI/ERC20) 節點或由受信任第三方提供商（如 Fireblocks、Bitgo）處理
- 消息：RabbitMQ 或 Kafka（處理異步任務、提款排程）
- 實時：WebSocket 或 Socket.IO（訂單簿、成交推送）

資料表：
- users (id, email, phone, password_hash, salt, level, kyc_status, created_at)
- wallets (id, user_id, currency, balance, locked_balance, address)
- orders (id, maker_id, taker_id, type, amount, price, status, escrow_id, created_at)
- escrows (id, order_id, amount, currency, status, released_at)
- audits (id, user_id, action, meta, ip, created_at)
- kycs (id, user_id, doc_type, doc_url, selfie_url, status, reviewer_id, reviewed_at)

安全設計要點：
- 密碼使用 Argon2 或 bcrypt，前端 never store sensitive secrets
- JWT short-lived + Refresh token stored httpOnly secure cookie
- 2FA：TOTP (Google Authenticator) + SMS for fallback
- 提幣需 2FA 與 IP / device trust check、提款白名單、人工/自動風控
- 冷熱錢包分離，多重簽章 (M-of-N) 與硬體安全模組 (HSM)

Escrow 流程（簡化）：
1. 買方下單並將資金 (法幣或加密) 轉入平台 Escrow
2. 賣家收到付款訊息後釋放加密貨幣到買方（或平台釋放）
3. 若雙方異議，開啟爭議工單，仲裁決定釋放或退回

KYC 流程要點：
- 文件上傳 + OCR 辨識驗證
- 自拍活體檢測 (liveness) + 臉部比對
- 人工審核介面 (後台)
- 紀錄審核判定與理由

部署：Dockerize 各服務 -> 使用 Kubernetes (EKS/GKE/AKS) -> 使用 CI/CD (GitHub Actions)
監控：Prometheus + Grafana，Sentry for error tracking

測試：單元測試、整合測試、壓力測試 (k6)、安全掃描 (OWASP ZAP)

*/