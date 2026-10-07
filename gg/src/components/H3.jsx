import React from 'react'
import './H3.css'
import avatar1 from '../assets/9df0bb18b0fc762976f1a538ad9007bf7cae49fb.png'
import avatar2 from '../assets/e302fc52f62d037a028ece25894d904eadb9a871.png'
import avatar3 from '../assets/8bab09d2199b1b37008dd29c13ea659d3062125d.png'

export default function H3() {
  return (
    <div className="d37">

      <div className="d38">
        <h2 className="d39">Отзывы</h2>
        <p className="d40">Более 15 000 000 компаний по всему миру уже используют CRM-системы.</p>
        <div className="d41">

          <div className="d42">
            <div className="d43">
              <img src={avatar2} alt="" className="d44" />
              <div className="d45">
                <p className="d46">Михаил Кириченко</p>
                <p className="d47">Just look</p>
              </div>
            </div>
            <p className="d48">«Отдел продаж начал отмечать в CRM все действия и результаты работы с клиентами — звонки, письма, встречи и их итоги, ход сделок, их завершение, выставление счетов — мы, наконец-то, начали учитывать всё.»</p>
          </div>

          <div className="d42">
            <div className="d43">
              <img src={avatar3} alt="" className="d44" />
              <div className="d45">
                <p className="d46">Алексей Гранин</p>
                <p className="d47">Datakit</p>
              </div>
            </div>
            <p className="d48">«Мы отслеживаем как результаты работы каждого менеджера, анализируя воронку продаж, так и продуктивность технических специалистов с помощью отчётов по задачам.»</p>
          </div>

          <div className="d42">
            <div className="d43">
              <img src={avatar1} alt="" className="d44" />
              <div className="d45">
                <p className="d46">Екатерина Мясникова</p>
                <p className="d47">МеталлСтройГрупп</p>
              </div>
            </div>
            <p className="d48">«Когда менеджеры работают в своих файлах на домашних компьютерах, нет прозрачности для руководителя. Я не понимала, как работают с клиентами, не забывают ли о них.»</p>
          </div>

        </div>
      </div>

      <div className="d49">
        <h2 className="d50">Частые вопросы</h2>
        <div className="d51">

          <div className="d52">
            <p className="d53">Сколько это стоит?</p>
            <span className="d54">+</span>
          </div>

          <div className="d52">
            <p className="d53">Можно ли подключить 1С?</p>
            <span className="d54">+</span>
          </div>

          <div className="d52">
            <p className="d53">А если сотрудники начнут сопротивляться новой системе?</p>
            <span className="d54">+</span>
          </div>

          <div className="d52">
            <p className="d53">Какая CRM лучше?</p>
            <span className="d54">+</span>
          </div>

          <div className="d52">
            <p className="d53">Смогут ли менеджеры скачать базу?</p>
            <span className="d54">+</span>
          </div>

        </div>
      </div>

      <div className="d55">
        <h2 className="d56">Заказать настройку CRM</h2>
        <p className="d57">Оставьте заявку,<br />и мы перезвоним Вам в течение 10 минут.</p>
        <div className="d58">
          <div className="d59">
            <input className="d60" type="text" placeholder="Название компании" />
            <input className="d60" type="tel" placeholder="Телефон*" />
          </div>
          <button className="d61">ЗАКАЗАТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</button>
          <p className="d62">Мы никогда не передаём Ваши данные третьим лицам</p>
        </div>
      </div>

      <div className="d63">
        <p className="d64">© 2015-2024 ООО «ИТ-Комфорт» ИНН: 5906138680 ОГРН: 1155958103962</p>
      </div>

    </div>
  )
}
