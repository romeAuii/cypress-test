/// <reference types="cypress" />


import { URL, Element, Data_tests_add } from '../../fixtures/Version_001/mock_data_test.json';
let case_index = 1;

describe(`Case ${case_index++} Open URL`, () => {
  
  it('a.Should https://hugeman.co/ website', () => {
    cy.visit(URL.Test_URL)
    cy.location().should((loc) => {
      expect(loc.href).to.equal(URL.Test_URL);
    })
  })

  it('b.Scroll down to the “Latest Blog” section', () => {
    cy.get('#wt-cli-accept-all-btn').click()

    cy.get('#latestblog').scrollIntoView().then(($element) => {
      cy.wrap($element).should('contain', 'Latest Blog');
    });
  })

  it('c.Click on MORE STORIES', () => {
    cy.get('a.elementor-button[href="https://hugeman.co/blog/"]').each(($element) => {
      cy.wrap($element)
        .then(($el) => {
          if (!$el.prop('disabled') && !$el.prop('readonly')) {
            cy.wrap($el).click({ force: true });
          }
        });
      cy.url().should('eq', 'https://hugeman.co/blog/');
    });
  })

  it('d.Scroll down to “blog” section on Blog page', () => {
    
    cy.get('#blog_list').scrollIntoView().then(($element) => {
      cy.wrap($element).should('contain', 'Blog');
    });
    cy.get('#wt-cli-accept-all-btn').click()
  })

  it('e. Click on TECH', () => {
    cy.contains('div.jet-tabs__control-inner div.jet-tabs__label-text', 'TECH').click();
    cy.contains('div.jet-tabs__control-inner div.jet-tabs__label-text', 'TECH')
      .closest('.active-tab')
      .should('exist');
    
      cy.get('[data-listing-source="posts"] [data-post-id]').filter(':lt(3)').each(($child, index) => {
        // Find the h2 elements within each child and log their values
        cy.wrap($child)
          .find('h2.elementor-heading-title.elementor-size-default')
          .invoke('text')
          .then((text) => {
            cy.log(`Value of the ${index + 1} h2: ${text}`);
          });
      });
  })

})

// describe(`Case ${case_index++} Add item`, () => {

//   it('Should be able to add new item ', () => {
//     Data_tests_add.forEach((List, index) => {
//       if (index == 0)
//         cy.get(Element.Input_field).click({ force: true });
//       cy.get(Element.Input_field).type(List);
//       cy.get(Element.Add_btn).click({ force: true });
//     });
//   })

//   it('New item should be display in TO-DO TASK tab', () => {
//     cy.get(Element.ToDoTask_Tab).click({ force: true });
//     Data_tests_add.forEach((List, index) => {
//       cy.get('#text-' + (index + 1)).should('have.text', (List))
//     });

//   })

//   it('Should not add empty input ', () => {
//     cy.get(Element.Input_field).click({ force: true });
//     cy.get(Element.Add_btn).click({ force: true });
//     cy.get(Element.ToDoTask_Tab).click({ force: true });
//     cy.get('#incomplete-tasks').find("li").should('have.length', Data_tests_add.length )

//   })

// })