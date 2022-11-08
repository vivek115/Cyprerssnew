/// <reference types="cypress" />
import Home_Equity_Loan from "../../Pages/HomeEquityLoanPage"
import Contacts from "../../Pages/ContactsAndIndustryContactsPage"

const homeEquityLoan = new Home_Equity_Loan
const contacts = new Contacts

describe('Verify that user is able to search contact by name', function () {

    it('Verify that user is able to search contact by name', function() {
        cy.Login()
        homeEquityLoan.clickOnMenuIcon()
        contacts.clickOnContacts()
        contacts.clickOnAddContactButton()
        contacts.enterAllTheRequiredFieldsAndVerify()
        contacts.searchContactByNameAndVerify()
        cy.Logout()
    })
})