import React from 'react'
import './H1.css'
import heroImage from '../assets/11b1db195fa221475e8dc977d3cfd591ed0ae1c4.png'
import logoIcon from '../assets/Icon (20).png'

export default function H1() {
  return (
    <div className="d1">

      <div className="d2">
        <div className="d3">
          <img src={logoIcon} alt="" className="d4" />
          <span className="d5">ИТ-КОМФОРТ</span>
        </div>
        <div className="d6">
          <div className="d7">
            <p className="d8">ВРЕМЯ РАБОТЫ</p>
            <p className="d9">Пн-Вс 9:00-21:00</p>
          </div>
          <div className="d7">
            <p className="d8">EMAIL</p>
            <p className="d9">info@it-komfort.ru</p>
          </div>
          <div className="d7">
            <p className="d8">МЕССЕНДЖЕРЫ</p>
            <p className="d9">+79128810296</p>
          </div>
          <div className="d7">
            <p className="d8">ТЕЛЕФОН</p>
            <p className="d9">+7(342)243-02-96</p>
          </div>
        </div>
      </div>

      <div className="d10">
        <div className="d11">
          <h1 className="d12">Поможем навести порядок в компании</h1>
          <p className="d13">
            Внедрение CRM за 2 недели.<br />
            Работаем по всей России.
          </p>
          <div className="d14">
            <div className="d15">
              <input
                className="d16"
                type="text"
                placeholder="Название компании"
              />
              <input
                className="d16"
                type="tel"
                placeholder="Телефон*"
              />
            </div>
            <button className="d17">ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</button>
            <p className="d18">Мы никогда не передаём Ваши данные третьим лицам</p>
          </div>
        </div>
        <div className="d19">
          <img src={heroImage} alt="" className="d20" />
        </div>
      </div>

    </div>
  )
}

