import React from 'react'
import './H2.css'
import crmImage from '../assets/26c12ceceb13345f8ecfc4f3e153f182a5817b45.png'
import analyticsImage from '../assets/Image.png'
import crmSvg from '../assets/CRM+sources.svg'

export default function H2() {
  return (
    <div className="d21">

      <div className="d22">
        <h2 className="d23">Объединение всех каналов связи в одной системе</h2>
        <p className="d24">Подключите мессенджеры, соцсети, Авито, сайты, чаты, и общайтесь с клиентами в режиме одного окна.</p>
        <div className="d25">
          <img src={crmSvg} alt="" className="d26" />
        </div>
      </div>

      <div className="d27">
        <h2 className="d28">Сотрудник уходит, данные остаются</h2>
        <p className="d29">Вся информация о клиенте и его заказах сохранится в CRM</p>
        <div className="d30">
          <img src={crmImage} alt="" className="d31" />
        </div>
      </div>

      <div className="d32">
        <h2 className="d33">Принимайте решения на основе данных</h2>
        <p className="d34">Отчёты по продажам, по менеджерам, по клиентам.</p>
        <div className="d35">
          <img src={analyticsImage} alt="" className="d36" />
        </div>
      </div>

    </div>
  )
}
