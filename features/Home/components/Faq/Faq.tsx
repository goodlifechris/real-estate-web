'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  color,
  Flex,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import base from '@emotion/styled/types/base';
import { FC } from 'react';



const faqData = [
  
    {
        "question": "What forms of payment will be accepted?",
        "answer": "There will be two options to make payments:\n\nThere will be an automated payment system that will have a processing fee.\nThe second option will be a wire Transfer."
    },
    {
        "question": "What is the payment schedule?",
        "answer": "You will have two options: Monthly or Quarterly payments."
    },
    {
        "question": "How often can you expect an update on the project?",
        "answer": "You will be sent an update on the project to your email quarterly. There will be constant updates via Facebook, Instagram and will also do YouTube videos every week where you will have the ability to subscribe to."
    },
    {
        "question": "Do you have to visit Kenya to invest?",
        "answer": "Is it not a requirement."
    },
    {
        "question": "What documents will you receive after final payment?",
        "answer": "You will receive a 50-year renewable indentured (equivalent to a deed). I will elaborate on the 50-year renewable lease; in the contract you will have a renewable lease of 1% of the total purchase price at the end of your lease. If you are granted citizenship in those 50 years, the lease automatically becomes 99 yrs."
    },
    {
        "question": "Can I invest as an LLC or an individual?",
        "answer": "You can as an individual but not as an US LLC. You can establish a Kenya LLC.  A Kenya LLC requires 2 individuals to be listed under a registered LLC in Kenya. As a non-citizen it requires a 500k threshold. Once the investor's investments reach the point where the 500k is reached, I would advise those investing that is interested in having their own LLC to start a managed holding company and have individual LLC under that holding company. As an individual who has invested under their name you can get the deed transferred to your Ghanian LLC."
    },
    {
        "question": "Can We recommend a Lawyer for you?",
        "answer": "We could but for transparency It would be a conflict of interest on our end being the developer. In Kenya there is the African Diaspora Resource Center, geared towards providing resources and recommendations for citizenship, lawyers, opening bank accounts and more. https://Kenya.africandiasporagroup.com/"
    },
    {
        "question": "Once completed and you choose to Airbnb or provide short- and long-term rental options will we manage it for you?",
        "answer": "Yes, we will provide property management. The service fee will be 15% of the total revenue received from the rental monthly."
    },
    {
        "question": "What taxes should I expect to pay?",
        "answer": "Kenya taxes for Rent on Residential properties is 8%.\nAirbnb units 12.5%\nTo avoid double taxation in the US we advise seeking accounting advice from a tax professional."
    },
    {
        "question": "Will we offer furniture packages?",
        "answer": "Yes, we will have different packages later to choose from for studios, condos, duplexes, and homes that will include appliances. You will be able to add the packages to your payment plan."
    },
    {
        "question": "Is home and rental insurance available and how much should we expect to pay?",
        "answer": "Yes. Home and rental insurance are available. An estimate depending on coverage would be $300-500 a year. We provide investors with information on the provider later in the development."
    },
    {
        "question": "Is financing available to Non Ghanian citizens and what is the requirements if any?",
        "answer": "Yes you can. One of the most important questions that most people get to contend with is which mortgage providers in Kenya to choose from and how to acquire a mortgage or a home loan in Kenya. We would look at what a mortgage is and then proceed to provide you with a selection of some of the Top 6 mortgage providers in Kenya. We would also provide details on some of the different types of mortgages. Hopefully, by the time you are through with this article, you would have an idea as to some of the best mortgage providers in Kenya\nGeneral requirements to acquire a home loan or mortgage in Kenya. The specific requirements for acquiring a mortgage from mortgage providers in Kenya would differ from one mortgage bank or lender to another. However, to be eligible for a home loan or mortgage in Kenya, generally, you may need to submit:\nA completed and signed mortgage application form from your preferred bank and pay an amount of processing fee that will be dictated by the bank.\nA form of identification such as a passport, driver's license or national ID. Most banks may require that you bring along a passport size photograph, a personal reference form and proof of attorney.\nYou may also need to verify your income and employment from your employers. You may need to provide your last three salary slips that show all necessary deductions.\nCopies of your individual income tax returns or audited accounts for the last 3 years if you are self-employed. As well as your business profile and your last 6 months bank statements if you are not a client of the bank. The bank may also need a credit report from a recognized credit bureau.\nSome additional requirements entail submitting an offer letter from the Real Estate Developer, making a down payment of the total cost, title documents to the property, copies of the site plans, and approved building plans.\nNow that we have met the general requirements of applying for a mortgage, the next dilemma would be to answer the question as to which mortgage providers in Kenya are best to acquire a mortgage or a home loan from.\nTop 6 mortgage banks or mortgage providers in Kenya:\n\nStanbic Bank\n\nStanbic bank is one of the largest commercial banks in Kenya. The facility fee is 2% with loan repayments being between 5 to 20 years to repay. In addition, there is no limit to the amount you wish to acquire. Acquiring a home loan may depend on your income as well. Stanbic bank gives you the flexibility of repaying the loan at a pace you may be comfortable with. Stanbic Bank also has 6 different mortgage products to choose from, namely:\nHome Purchase – This is primarily meant for the immediate purchase of completed homes.\nDeveloper Construction – This is perfect for individuals who are yet to complete their homes from Stanbic Banks' preferred developers.\nEquity release – With the equity release you can take a loan and use the cash released for a variety of personal needs, including the purchase of another home or prime land, business expansion or funding education.\nEmployer Group Mortgage Scheme – Developer-based home construction on your land bought under organization block lands schemes.\nHome Improvement – This plan allows you to renovate, remodel or expand your current home.\nRefinancing – The refinancing mortgage is in 3 forms:\nInternal refinancing – The internal refinancing allows you to arrange new financing terms such as the term of your existing Stanbic Home Loan, currency and amount.\nExternal Refinancing – Financing is provided to help take over existing home loans from other banks.\nCash Refinancing – This process gives you access to extra money if the value of your property has appreciated over the years.\nStanbic Bank can be contacted on +233 302 815 789 / 080 010 009\n\nAbsa\n\nAbsa promises to give you a more convenient, easier and faster means of receiving a mortgage. Absa helps you to own a home, borrow against a home you own, even give your current abode an upgrade or help you take over your home loan from another financial institution. They offer up to 90% finance for home purchase and up to 70% for equity release and home improvement. With Absa, your property should be located within Accra, Kumasi and its environs.\nWhen applying for a home loan in Kenya at Absa, you may need to bring along, but not limited to, the following items:\nYour current payslip and a form of identification.\nAn offer of sale from a vendor\nLand title certificate\nIndenture\nDeed of assignment\nSite plan\nBuilding permit\nGround rent\nConsent to a mortgage for leasehold (if applicable)\nSale and purchase agreement\n\nCal Bank\n\nAside from their other functionalities as a bank, Cal Bank also seeks to assist clients to gain access to mortgage loans to purchase a home of their choice. The Cal Bank Mortgage has been designed to meet your present home loan needs. You are to be between the ages of 21 to 55 to be eligible for a mortgage from Cal Bank. It is required that you fill the Mortgage form from Cal Bank and follow the procedures detailed out. Some requirements to acquire a mortgage in Kenya from Cal Bank are :\nA completed and signed mortgage application from Cal Bank.\nAn offer letter from the Real Estate Developer\nA form of identification\nIncome verification\nCredit History\nProperty documents\nDown Payment\nDisbursement Conditions ( Pre and Post)\nSecurity: personal guarantee of the applicant.\nYou can contact Cal Bank on +233 800 500 500 or email customercare@calbank.net for more information.\n\nRepublic Bank\n\nRepublic bank aims to support both companies and individuals to acquire residential property for investment or private purposes. The maximum amount of loan a person can take depends on the client’s credit profile. You will need to make a down payment of 20% and the maximum term is 20 years. There is also a processing fee, which is 1.5% of the proposed loan if you are Kenyaian and USD250 /GBP150 if you are a non-resident Kenyaian.\nThe requirements needed to acquire a home loan in Kenya at Republic Bank are as follows but not limited to:\nA completed Republic Bank Mortgage form\nProcessing fee\nA form of identification ( passport, national ID), a passport picture, a personal reference form power of attorney.\nNB: Republic Bank may also ask for proof of relationship if it is a joint application.\nRepublic Bank has about 6 mortgage packages for individuals and companies. They are as follows:\nHome purchase mortgage: This form of mortgage is designed for individuals or companies to purchase a property for personal use or investment purposes. The minimum down payment one can make is 20%. The maximum mortgage tenure is 20 years for resident Kenyaians and 15 years for non-resident Kenyaians. The processing fee for resident Kenyaians is 1.5% of the proposed loan and USD 250 for non-resident Kenyaians. Non-resident Kenyaians may also need to pay for the facility fee which is 1% of the proposed loan. The preparation towards registration of legal documents, which includes the legal fee, is 1% of the property price for stamp duty on the title, 0.5% of the loan amount for stamp duty on mortgage deed and GH¢1,500.00 towards registration on the title for both resident and non-resident Kenyaians.\nHome equity mortgage: The home equity mortgage enables applicants who own homes or may have already invested in residential properties to take out or release the equity in those properties to build another property or renovate a property. This product is suitable for existing homeowners and companies with properties. Republic bank states that the mortgage loans shall not exceed a maximum of 80% of the forced sale value (FSV) of the property. The maximum term for the facility is 15 years for both cedi and foreign currency loans. The title to the property should not have any controversies surrounding it. The title must also be duly registered. With the legal fee, Republic Bank requires 0.5% of the loan amount for stamp duty on Mortgage Deed and GHC600 towards registration on the title (if the document is already registered, if not GHC1,500.00 toward registration on the title). This applies to both resident and non-resident Kenyaians.\nBuy, Build and Own a Home: This type of mortgage package is designed for low-income individuals who can only own their own home by acquiring land and developing it over time.\nThis mortgage product entails two main features. The “Buy” land portion and the “Build and Own” portion. Beneficiaries will contribute 10% of the cost of the land. The maximum amount for the “Buy” portion of the loan is USD15, 000 or the cedi equivalent.\nAfter 50% payment has been made on the initial loan, the customer qualifies for the “Build and Own” portion of the product. The customer selects one out of six designs from the Bank to construct a house. The selection of the house is done at the time of the initial loan application for the “Buy” land portion. The maximum loan amount for the “Build and Own” (Construction) is USD35, 000 or the cedi equivalent.\nThe maximum term for each portion of the facility is 10 years which totals up to 20 years. The land must be registered appropriately and the title must be clear and undisputed. All permits such as development permits, building permits and approved building plans are necessary requirements.\nHome Completion Mortgage: The Republic Bank Home Completion Mortgage aids individuals to complete the construction of their houses. The amount required from Republic Bank to complete the house must fall within the maximum loan. More than 50% of the total cost of construction of the property can not be requested for a loan, and the property must have reached at least the lintel level. The maximum term for this facility is 15 years for both cedi and foreign currency loans. All necessary building plans and permits, alongside appropriately registered title to the property, must be submitted to the bank. The loan will be disbursed in stages. Republic Bank will inspect the property after each stage of disbursement to ensure that the funds are being utilized properly.\nThe applicant must not have reached the general mandatory retiring age of 60 or 65 in the case of judges of the High Court and 70 years for judges in the Appeals and Supreme Courts.\nJoint applications will be accepted in the form of husband and wife or parent and child.\nUpon the beneficiaries’ resignation or cessation of employment with GOG the interest rate on the mortgage loan shall be revised in accordance with the prevailing Republic Bank market rates.\nHome improvement mortgage: The Republic Bank Home Improvement Mortgage is designed to assist individuals to renovate their homes or undertake extension works on their existing houses. The loan can also be used to acquire fixtures of chattels for the home. The target group for this product is existing homeowners and companies with properties. The maximum term for this facility is 15 years for both the cedi loan and foreign currency loan. The applicant is to provide a clear and undisputed title to the property, which must be duly registered.\nRepublic bank can be contacted on +233 302 429 555 / +233 302 258 106 / +233 302 242 093\n\nFirst National Bank\n\nFirst National Bank, now merged with Kenya Home Loans, provides its services in different forms when it comes to mortgages in Kenya. The home purchase mortgage includes the following:\nTypes of mortgages at First National Bank:\nHome Construction Mortgage is given to individuals who need a loan to build their homes.\nThe land purchase mortgage from First National Bank helps you own a land.\nThe Home Owners Mortgage is also available for homeowners who wish to borrow for a longer period of time and use their home as collateral.\nThe Save-to-Own is perfect for young individuals who may now be starting out or self-employed individuals who may not have a steady flow of income but wish to own a home.\nFirst National Bank offers various packages under the home purchase mortgage and they are as follows:\nFirst-time buyer - If you are a first-time buyer, First National Bank offers this service exclusively to individuals who have never purchased a home before.\nBuy-to-let - Interested in buying another property to rent? Allow First National Bank to help you with the process. They offer buy to let services where you can buy another property for the purpose of investment and rent it out to tenants.\n100% Purchase – This is similar to the first-time buyer package. If you are a Kenyaian and wish to purchase your first home, you can apply for a 100% loan from First National Bank to purchase the property if you cannot raise the minimum deposit.\nHome Purchase Loan – The Home Purchase Loan enables homeowners to purchase an additional home.\nNB: Mortgage rates for these banks differ from bank to bank.\nYou can contact First National Bank on 024 243 5052 / 024 243 5057\n\nEcobank Kenya\n\nEcobank has a mortgage calculator available on its website to help you know how much you can pay periodically. Acquiring a mortgage in Kenya from Ecobank is quite simple. You can walk into their office at any of their local branches and request a mortgage form. You will be guided through the process and the necessary documents to submit."
    },
    {
        "question": "If I was to rent out my unit, what rate should I expect to rent it at?",
        "answer": "Given this is a unique one-of-a-kind project I would suggest the studios renting for $150 US a night to the Homes $250 and everything else in-between."
    },
    {
        "question": "How safe is Kenya?",
        "answer": "Kenya is a safe place. On the Global Peace Index Kenya is ranked 40th in the World and the US is ranked 129 out of 163 Countries."
    },
    {
        "question": "Does Kenya require a Visa to enter the Country?",
        "answer": "Yes, if you are investing, we advise you to do a multi entry Visa. We will help facilitate the process once that time arrives."
    },
    {
        "question": "What is the main language spoken in Kenya?",
        "answer": "English is national language. However, over 80 different native languages are spoken in Kenya, and everyone knows at least two-three."
    },
    {
        "question": "What forms of transportation exist in Kenya?",
        "answer": "Kenya has public transportation called the tro-tro which is a van that cost less than $1. There is Ride sharing apps (Uber, Bolt, Yango) and Cabs. If you purchase a car, you can hire a driver for $300US a month."
    },
    {
        "question": "How far is the closest Grocery store from the Development?",
        "answer": "There is a full-service Grocery store 20 minutes away at the bottom of the mountain. There are many fruits and vegetable stands on the main road of the project."
    },
    {
        "question": "Is Health and Dental insurance available in Kenya?",
        "answer": "Yes, it is. Some insurance companies transfer over to Kenya. You can receive policies here in Kenya ranging in price. Most individuals pay out of pocket due to the low cost. For example, Childbirth would be $300US."
    },
    {
        "question": "How many African Americans in Kenya?",
        "answer": "There are over 7,000 African Americans in Kenya"
    },
    {
        "question": "What documentation is required to receive a reservation form to hold your investment?",
        "answer": "A form of Id (Driver’s license or Passport) and one of your social media handles (Facebook, Instagram, TikTok)."
    },
    {
        "question": "Which company is contracted out to build the development?",
        "answer": "Cedar’s Real Estate Developers Limited is a private limited liability family company formed in 2004 in Accra- Kenya. Since its inception the company has been involved in selling reasonably priced parcel of lands in different locations in the country to institutions, corporate entities as well as individuals without any litigation. After some years in successful operations, the company strategically moved into real estate development providing affordable, quality, and contemporary classy housing units to corporate entities, institutions, and individuals at low price. The company is an active member of Kenya Real Estate Developers Association (GREDA)."
    },
    {
        "question": "How many seasons are in Kenya?",
        "answer": "There are two seasons in Kenya, the dry season and the wet season. The rainy season experiences the rainfall in two periods, appearing between March to July and September to October. Heaviest rainfall mostly occurs in June."
    },
    {
        "question": "Does Kenya have any Natural disasters like Tornadoes or Earthquakes.",
        "answer": "No"
    },
    {
        "question": "What vaccinations are shots required to enter Kenya?",
        "answer": "Yellow Fever"
    },
    {
        "question": "Will the property have Wifi?",
        "answer": "Yes, each resident will be responsible for paying for their service. Estimate of around $60 US a month."
    },
    {
        "question": "Will investors have a chance to visit the project during construction?",
        "answer": "Yes you will, we have several tour dates with tours to Ghana on the Calendar that we recommend you attend at least one of them."
    },
    {
        "question": "Are there any additional fees besides the 1% of the total sales price for HOA paid yearly?",
        "answer": "There are no extra fees, taxes (besides mentioned above)."
    },
    {
        "question": "What utilities will we be responsible for?",
        "answer": "The Houses, Duplexes and Lockouts will be off Grid thus you will not be responsible for any utilities. They will have Solar, Battery Back up system, Septic Tanks and Water from a boar hole with a Filtration system. The Condo Units in the Building will be grid tied that will feature some Solar but will have to pay electricity with estimates of around $30-90 a month."
    }

];

// FAQ Accordion Component
const FAQAccordion: React.FC = () => {
  // This calculates how many items to show on each side dynamically
  const half = Math.ceil(faqData.length / 2);
  const leftData = faqData.slice(0, half);
  const rightData = faqData.slice(half);

  return (
    <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between">
      {/* Left Column */}
      <Box flex="1" mr={{ lg: 8 }} mb={{ base: 8, lg: 0 }}>
        <Accordion allowMultiple>
          {leftData.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Right Column */}
      <Box flex="1" ml={{ lg: 8 }}>
        <Accordion allowMultiple>
          {rightData.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight="bold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
};

// Main Faq Component
const Faq: React.FC = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Frequently Asked Questions</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Feel free to contact us if you have any more questions.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        {/* FAQ Accordion */}
        <FAQAccordion />
      </Container>
    </Box>
  );
};

export default Faq;


