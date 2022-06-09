///< reference type="cypress"/>

describe('bajra website testing',()=>{
    before(()=>{

        cy.visit('https://bajratechnologies.com/')
    })
  /////---------------------------------HOMEPAGE-----------------------------------------------------/////
     it('verify the homepage of Bajra',()=>{
        //cy.visit('https://bajratechnologies.com/')
        cy.get('#top_menu_collapse > #top_menu > :nth-child(1) > .nav-link > span').click()
        cy.get('.convolink').click()
        cy.wait(5000)
        cy.get('.o_website_form_custom.o_fake_not_editable > .col-lg-7 > .form-control').type('RamKhadka')
        cy.get(':nth-child(3) > .col-lg-7 > .form-control').type(981812345)
        cy.get(':nth-child(4) > .col-lg-7 > .form-control').type('ram@gmail.com')
        cy.get(':nth-child(5) > .col-lg-7 > .form-control').type('Enquiry about the job vacancy')
        cy.get(':nth-child(6) > .col-lg-7 > .form-control').type('which job vacancy is  available in you company??')
        cy.wait(5000)
        cy.go(-1)
        
        cy.get('.orCheck_text').click()
        
        cy.get(-1)
        cy.get('.startlink').click()
        cy.wait(5000)
        cy.get('.o_website_form_custom.o_fake_not_editable > .col-lg-7 > .form-control').type('RamKhadka')
        cy.get(':nth-child(3) > .col-lg-7 > .form-control').type(981812345)
        cy.get(':nth-child(4) > .col-lg-7 > .form-control').type('ram@gmail.com')
        cy.get(':nth-child(5) > .col-lg-7 > .form-control').type('Enquiry about the job vacancy')
        cy.get(':nth-child(6) > .col-lg-7 > .form-control').type('which job vacancy is  available in you company??')
        cy.wait(5000)
        
        cy.get('#top > .navbar > .container > .navbar-brand > span > .img').click()
     })
       


   /////----------------------------------About Us page---------------------------------------------/////

     it('verify the about us page of Bajra',()=>{
        cy.get('#top_menu_collapse > #top_menu > :nth-child(2) > .nav-link > span').click()
        cy.contains('HIRE US').click()
        cy.wait(5000)
        cy.get('.o_website_form_custom.o_fake_not_editable > .col-lg-7 > .form-control').type('RamKhadka')
        cy.get(':nth-child(3) > .col-lg-7 > .form-control').type(981812345)
        cy.get(':nth-child(4) > .col-lg-7 > .form-control').type('ram@gmail.com')
        cy.get(':nth-child(5) > .col-lg-7 > .form-control').type('Enquiry about the job vacancy')
        cy.get(':nth-child(6) > .col-lg-7 > .form-control').type('which job vacancy is  available in you company??')
        cy.get('.btn').click()
        cy.wait(5000)
        cy.get('#top > .navbar > .container > .navbar-brand > span > .img').click()
     })

   /////---------------------------------------Work page---------------------------------------//////

     it('verify the work page of Bajra',()=>{

        cy.get('#top_menu_collapse > #top_menu > :nth-child(3) > .nav-link > span').click()
        cy.wait(5000)
        cy.get('.active > p').click()
        cy.get(':nth-child(1) > :nth-child(1) > .img > .overlay').click()
        cy.go(-1)
        cy.get(':nth-child(3) > a > p').click()
        cy.get(':nth-child(2) > :nth-child(1) > .img > .overlay').click()
        cy.go(-1)
        cy.get(':nth-child(4) > a > p').click()
        cy.get(':nth-child(4) > :nth-child(1) > .img > .overlay').click()

        cy.get('#top > .navbar > .container > .navbar-brand > span > .img').click() //company logo



     })

     it.skip('verify the blogs page of bajra',()=>{

        cy.get('#top_menu_collapse > #top_menu > :nth-child(4) > .nav-link > span').click()

     })
   /////------------------------------------Careers Page-----------------------------------------/////

     it('verify the careers page of Bajra',()=>{
        cy.get('#top_menu_collapse > #top_menu > :nth-child(5) > .nav-link > span').click()
        cy.get('.btn').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .col-lg-7 > .form-control').type('Ram Khadka')
        cy.get(':nth-child(4) > .col-lg-7 > .form-control').type('ram@gmail.com')
        cy.get(':nth-child(5) > .col-lg-7 > .form-control').type(981812345)
        cy.get(':nth-child(6) > .col-lg-7 > .form-control').type('Associate')
        cy.get(':nth-child(7) > .col-lg-7 > .form-control').type('javascript')
        
        //file upload 

        cy.get(':nth-child(8) > .col-lg-7 > .form-control').selectFile('cypress/fixtures/CV_QA.pdf')
        //const imagefile='abc.jpg';
       // cy.get('[name="Resume"]').attachFile(imagefile)
        cy.get('.btn').click()
        cy.get('#top > .navbar > .container > .navbar-brand > span > .img').click()
     })

     it('verify the application form for Associate QA vacancy',()=>{

        cy.get('#top_menu_collapse > #top_menu > :nth-child(5) > .nav-link > span').click()
        cy.get(':nth-child(10) > .media-body > h3 > a > span').click()
        cy.get('div.float-right > .btn').click()

        cy.wait(4000)
        cy.get('input[name="1_1"]').type('ram')
        cy.wait(4000)
        cy.get('input[name="1_2"]').type('ram@gmail.com')

        cy.get('input[name="1_3"]').type(984812345)
        cy.wait(4000)
        cy.get('.file-field > .form-control').selectFile('cypress/fixtures/CV_QA.pdf')
        cy.get('input[name="1_5"]').type(30000)
        cy.get('input[name="1_6"]').type(40000)
        cy.wait(4000) 

        cy.get('input[name="1_7_1"]').check()
        cy.get('#1_8').type('this is one of the best IT company in Nepal')
        cy.get('.text-center > .btn').click()

        cy.get('#top > .navbar > .container > .navbar-brand > span > .img').click()
        cy.wait(4000)
      })

   /////---------------------------------------Contact Us page----------------------------------/////

      it('verify the contact us page of Bajra',()=>{


        cy.get('#top_menu_collapse > #top_menu > :nth-child(6) > .nav-link > span').click()
        cy.get('.o_website_form_custom.o_fake_not_editable > .col-lg-7 > .form-control').type('Ram Khadka')
        cy.get(':nth-child(3) > .col-lg-7 > .form-control').type(981812345)
        cy.get(':nth-child(4) > .col-lg-7 > .form-control').type('ram@gmail.com')
        cy.get(':nth-child(5) > .col-lg-7 > .form-control').type('Enquiry about the job vacancy')
        cy.get(':nth-child(6) > .col-lg-7 > .form-control').type('which job vacancy is  available in you company??')
        cy.get('.btn').click()

        cy.get('#top_menu_collapse > #top_menu > :nth-child(1) > .nav-link > span').click()
      })
})