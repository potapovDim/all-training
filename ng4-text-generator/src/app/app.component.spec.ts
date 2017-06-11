import { ComponentFixture, TestBed } from "@angular/core/testing";
import { expect } from "chai";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TextGenService } from "./textGen.service";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const textGenServiceStub = {
      getText: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: TextGenService, useValue: textGenServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it("can load instance", () => {
    expect(comp).to.not.eql(null);
  });

  // it("title defaults to: Text generator service", () => {
  //   expect(comp.title).toEqual("Text generator service");
  // });

  // describe("ngOnInit", () => {
  //   it("makes expected calls", () => {
  //     spyOn(comp, "getTextFromServer");
  //     comp.ngOnInit();
  //     expect(comp.getTextFromServer).toHaveBeenCalled();
  //   });
  // });

});
