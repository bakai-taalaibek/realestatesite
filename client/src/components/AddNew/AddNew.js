import React from "react";
import "./addnew.css";
import map from "./assets/map.png";
import add from "./assets/add.png";

const AddNew = () => {
  return (
    <div className="container">
      <p className="p card__title mt-[60px] text-[#555555] mb-[120px]">
        Главная / Продажа недвижемости
      </p>

      <div className="add">
        <h1 className="text-[40px] font-semibold mb-[40px]">
          Добавить объявление
        </h1>
        <p className="pole">
          Поля, обозначенные * - обязательные. После создания объявления вы
          можете редактировать и удалять его в Личном кабинете.
        </p>
      </div>

      {/*Тип сделки  */}
      <div className="flex">
        <p className="text-[24px] text-[#000000] font-medium">Тип сделки</p>

        <div className="select-menu">
          <div className="select-btn">
            <select className="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Выбрать</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <p className="text-[24px] text-[#000000] font-medium ml-[115px]">
          Тип недвижимости
        </p>

        <div className="select-menu">
          <div className="select-btn">
            <div className="inline-block relative w-64">
              <select className="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Выбрать</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/*Тип сделки  */}

      <div className="object">
        <p className="obj text-[32px] text-[#000000] font-medium mt-[119px]">
          Об объекте
        </p>

        <div className="kvadrat">
          {/* div1 */}
          <div className="flex">
            <div className="div1">
              <div className="ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Город
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите город"
                    />
                  </div>
                </div>
              </div>
              <div className=" ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Количество комнат*
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите число"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Год постройки*
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите число"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="div2 ml-[128px] mr-[128px]">
              <div className="div2 ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Адрес
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите адрес"
                    />
                  </div>
                </div>
              </div>
              <div className="div2 ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Количество этажей*
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите число"
                    />
                  </div>
                </div>
              </div>
              <div className="div2 ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Отопление
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <select className="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>Выбрать</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="div3">
              <div className=" ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Телефон*
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="+(996)"
                    />
                  </div>
                </div>
              </div>
              <div className="div1 ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Прощадь (м2)*
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Введите число"
                    />
                  </div>
                </div>
              </div>
              <div className="div1 ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Валюта
                </p>
                <div className="option-menu ">
                  <div className="mt-[28px] font-normal text-[18px] flex">
                    <div className="label1">
                      <input type="radio" name="radio" />
                      <label class="form-control ml-[14px]">USD</label>
                    </div>
                    <div className="label2 ml-[32px]">
                      <input type="radio" name="radio" />
                      <label class="form-control ml-[14px]">USD</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="flex mt-[143px]">
            <div className="div1">
              <div className="ml-[24px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Цена
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Договорная"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="div2">
              <div className="ml-[150px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Дата для просмотра
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="дд/мм/гггг"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="div2">
              <div className="ml-[150px]">
                <p className="city text-[#000000] font-normal text-[18px]">
                  Время для просмотра
                </p>
                <div className="option-menu">
                  <div className="option-btn mt-[28px]">
                    <input
                      class="bg-[#F4F4F4] appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* kvadrat */}
      </div>

      <div>
        <h3 className="mt-[900px] mb-[40px]">Расположение</h3>
        <img className="mb-[120px]" src={map} alt="map" />
      </div>

      <h3>Фотографии</h3>
      <div className="imageAdd mb-[240px]">
        <div className="box">
          <div className="add_img">
            <div className="flex-column items-center">
              <img className="addImage ml-[50px]" src={add} alt="" />
              <p className="addp">Добавить изображение</p>
            </div>
          </div>
        </div>

        <div className="ml-[128px]">
          <p className="ppp ">
            Внимание, вы можете загрузить максимум 10 изображений обьекта, в
            формате jpeg. После того,как добавите изображение нажмите кнопку
            “Опубликовать”
          </p>

          <button className="addBtn">Опубликовать</button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
