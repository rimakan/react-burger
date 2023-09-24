import React from "react";
import s from "./BurgerConstructorLayout.module.scss";
import { productsList } from "../../../data/products";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorFooter from "../BurgerConstructorFooter/BurgerConstructorFooter";
import { ProductType } from "../../../models/product";

const BurgerConstructorLayout: React.FC = () => {
  const bun = productsList[0];
  const filteredProducts = productsList.filter(
    ({ type }) => type !== ProductType.Bun
  );
  console.log(filteredProducts);

  return (
    <section className={`${s.burgerConstructorLayout}`}>
      <ConstructorElement
        text={`${bun.name} (верх)`}
        thumbnail={bun.image_mobile}
        type="top"
        price={bun.price}
        isLocked={true}
        extraClass="m-4"
      />
      <div
        className={`${s.mainProductsList} custom-scroll`}
      >
        {filteredProducts.map(({ _id, name, image_mobile, price }) => {
          return (
            <div className={s.mainProductsList__listItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                key={_id}
                text={name}
                thumbnail={image_mobile}
                price={price}
              />
            </div>
          );
        })}
      </div>
      <ConstructorElement
        text={`${bun.name} (низ)`}
        thumbnail={bun.image_mobile}
        type="bottom"
        price={bun.price}
        isLocked={true}
        extraClass="m-4"
      />
      <BurgerConstructorFooter />
    </section>
  );
};

export default BurgerConstructorLayout;
