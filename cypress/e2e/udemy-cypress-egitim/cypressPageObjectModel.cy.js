import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage();

import homepageSecond from "../../pageObjectModel/homepageSecond";
describe("Page Object Model 1nci Kullanimi", () => {
  it("Page object model kullanimi ornekleri", () => {
    homepagePom.navigate();
    homepagePom.pricingBtn();
  });
});

describe.only("Page Object Model 2nci Kullanimi", () => {
  it("Page object model kullanimi ornekleri", () => {
    homepageSecond.navigate();
    homepageSecond.pricingBtn;
  });
});
