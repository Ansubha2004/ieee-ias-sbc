import React from 'react'

function Joinposter() {
  return (
    <div className="min-w-full sm:min-w-[23%] rounded-[10px]  flex flex-col items-center bg-emerald-900  h-auto box-border p-7">
      <p className="text-[1.8rem] sm:text-[1.1rem] w-full   border-solid border-[3px] border-white p-2 rounded-[10px] text-white font-bold text-center">Explore IEEE-IAS</p>
      <br />
      <ul className="w-[95%] box-border flex flex-col  gap-2">
        <li className="text-[1.5rem] sm:text-[0.8rem] hover:scale-[1.03] hover:underline text-white "><a href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiNGwzeTAxMzVIODEtV2FOdzBZcDVyYlpQb2EwIiwic3VmZml4IjoiTEN5QXh2LjE3NDkzMTIyODUifQ..K4Mb4HDBELQpTcbLa6D6cg.RFsoAx4THBPerAZWtDkuljvfjCvviz0TU3CuLzVkWMS2wT3DCJWaldSGHUEOku9-DORC7LS2W77K5ZSpnF9KM2Yu8vJ8jaH8f4THyOPelXpq5D0NsieWG448Lq5FY5OY.wBOEBw9bOcEyQnrhWQKpjQ&nonce=HETww4evawCcZEh1TO9XeEpl-gPO-yMtulx2ydSY6OA&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication" >1. Register at IEEE</a></li>
        <li className="text-[1.5rem] sm:text-[0.8rem] hover:scale-[1.03] hover:underline text-white"><a href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIA034">2. Join IEEE-IAS</a> </li>
        <li className="text-[1.5rem] sm:text-[0.8rem] hover:scale-[1.03] hover:underline text-white"><a href="https://www.ieee.org/membership/renew">3. Renew Membership</a></li>
      </ul>
    <br />
    </div>
  )
}

export default Joinposter
