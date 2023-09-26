import React, { Component } from "react";
import { FaDashcube } from "react-icons/fa";

class PlacingOrder extends React.Component {
  render() {
    return (
      <div className="placing-order">
        <h2>ОФОРМЛЕНИЕ ЗАКАЗА</h2>
        <div className="header-line placing-order-line"></div>
        <div className="placing-order-form">
          <form>
            <div className="country">
              <label className="label-country" for="country">
                СТРАНА
              </label>
              <input id="country" name="country" placeholder="Страна"></input>
            </div>

            <div className="address">
              <label for="sity">АДРЕС ПОЛУЧЕНИЯ</label>
              <div className="address-input">
                <input name="sity" id="sity" placeholder="Город"></input>
                <input
                  name="address"
                  id="address"
                  placeholder="Адрес доставки"
                ></input>
              </div>
            </div>
            <div className="your-data">
              <label for="name">ВАШИ ДАННЫЕ</label>
              <div className="your-data-input">
                <div className="your-data-input-top">
                  <input name="name" id="name" placeholder="Имя"></input>
                  <input placeholder="Фамилия"></input>
                </div>
                <div className="your-data-input-buttom">
                  <input placeholder="Телефон" type="tel"></input>
                  <input placeholder="Электронная почта" type="email"></input>
                </div>
              </div>
            </div>
            <div className="messengers">
              <label for="telegram">МЕССЕНДЖЕРЫ</label>
              <p className="messengers-text-more">
                При необходимости укажите мессенджер для связи
              </p>
              <div className="messengers-input">
                <input
                  name="telegram"
                  id="telegram"
                  placeholder="Telegram"
                ></input>
                <input placeholder="WhatsApp"></input>
              </div>
            </div>
          </form>
          <div className="placing-order-pay-button">
            <div className="cart-button">ПО КАРТЕ</div>
            <div className="certificate-button">СЕРТИФИКАТ</div>
          </div>
        </div>
      </div>
    );
  }
}
export default PlacingOrder;
