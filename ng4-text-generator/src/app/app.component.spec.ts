
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { expect } from "chai";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TextGenService } from "./textGen.service";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    const textGenServiceStub = {
      getText: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: TextGenService, useValue: textGenServiceStub }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      console.log(fixture, "!!!!!!!!!!!!!!!!!")
      //comp = fixture.component
      
    })
  }));
  it("can load instance", () => {
    console.log(comp)
    expect(1).to.not.eql(1);
  });

  // it("title defaults to: Text generator service", () => {
  //   expect(comp.title).to.eql("Text generator service");
  // });

  // describe("ngOnInit", () => {
  //   it("makes expected calls", () => {
  //     spyOn(comp, "getTextFromServer");
  //     comp.ngOnInit();
  //     expect(comp.getTextFromServer).toHaveBeenCalled();
  //   });
  // });

});
