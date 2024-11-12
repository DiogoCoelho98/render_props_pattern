import { faker } from "@faker-js/faker";
import List from "./List";
import Mouse_Tracker from "./Mouse_Tracker";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";
import Counter from "./Counter";

// LIST OF PRODUCTS
const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

// LIST OF COMPANIES
const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

export default function App() {
  return (
    /*<div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={true}
            />
          )}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div>

      <Mouse_Tracker
        render={(mouse_postion) => (
          <p>
            Mouse position: {mouse_postion.x},{mouse_postion.y}
          </p>
        )}
      />
    </div> */
    <div>
      <h1>Compound component pattern</h1>
      <Counter
        icon_increase="+"
        icon_decrease="-"
        label="Not flexible counter"
        hide_label={false}
        hide_increase={false}
        hide_decrease={false}
      />

      <Counter>
        <Counter.Label>My flexible counter component</Counter.Label>
        <Counter.Count_Increase icon="+" />
        <Counter.Count_Decrease icon="-" />
        <Counter.Count />
      </Counter>
    </div>
  );
}
