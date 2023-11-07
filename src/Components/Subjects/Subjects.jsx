import { useState, useEffect } from 'react'
import './Subjects.css'

function Subjects({ department, index, returnTo , small }) {

  const [subjects, setSubjects] = useState([])
  const [ link , setLink ] = useState([])

  console.log(small);

  useEffect(() => {

    if (department === 'General') {

      if (index === 0) {
        
        setSubjects(['Communication Skill in English', 'Mathematics 1', 'Applied Physics 1', 'Applied Chemistry 1'])
        setLink(['','https://drive.google.com/drive/folders/1AEOuGfE5uArJfeTkVntsVA9OHie6n-lP?usp=drive_link',
          'https://drive.google.com/drive/folders/1HhdTpbvpw8W0gjpHaD7co7fVeosOVhv3?usp=drive_link',
          'https://drive.google.com/drive/folders/1F1OOxcIsUdb2MdQe5rWhtDNL63usnB1d?usp=drive_link'])
      
      }
      else if (index === 1) {

        setSubjects(['Mathematics 2', 'Applied Physics 2', 'Envirornmanetal Science'])
        setLink(['https://drive.google.com/drive/folders/1YxmBw928DvvJNTOwBVurHqdKi07GELBi?usp=drive_link',
        'https://drive.google.com/drive/folders/1uzDzXX7vgtHWCE3NZFQMTBsgCRXyY9iA?usp=drive_link',
        'https://drive.google.com/drive/folders/1xoFszgQrMxC-qHSIH5f0_BxtiluumKX6?usp=drive_link'])

      }

    }
    else if ( department === 'Automobile' ) {

      if ( index === 0 ) {

        setSubjects(['Engineering Mechanics'])
        setLink(['https://drive.google.com/drive/folders/107IwapkRcF3RGFT-H7bxPf0XLGFYPo4X?usp=drive_link'])

      }
      else if ( index === 1 ) {

        setSubjects(['Fundamentals of Fluid Mechanics','Manufacturing Technology for Automabile Components',
        'Automobile Electrical and Electronics System','Internal Combustion Engines'])
        setLink(['https://drive.google.com/drive/folders/17JF7dzB9wEh4WokivZrSF2THUk8P_4WS?usp=drive_link',
        'https://drive.google.com/drive/folders/1U7rb6fdfHqQOfk0duJXxhZPDApo_5MAg?usp=drive_link',
        'https://drive.google.com/drive/folders/1YiBlRI0te3aHBEk6dc7CIlcvRQJIEIwZ?usp=drive_link',
        'https://drive.google.com/drive/folders/1RwKkYacqBltyPEEqFT1XeFS2EbxzvNUN?usp=drive_link'])

      }
      else if ( index === 2 ) {

        setSubjects(['Heat Power Engineering','Material Science and Strength of Materails'])
        selectLink(['https://drive.google.com/drive/folders/1OerPr_XweTkk2g3e3MysMFEQft-s5Xrx?usp=drive_link',
        'https://drive.google.com/drive/folders/1boJFhRxfHLqQNlfvgJd4YQA6vlrR9qC3?usp=drive_link'])

      }
      else if ( index === 3 ) {

        setSubjects(['Industrail Management and Safety','Design of Automotive Components','Vehicle Diagnostics and Services',
        'Elective'])
        setLink(['https://drive.google.com/drive/folders/1AHzsUE4GLz1uNIryLtOGIr0ISaQhY3Ux?usp=drive_link',
        'https://drive.google.com/drive/folders/1uu_Mzk1IAbCI0egqvvdP_jFAnefEhNIW?usp=drive_link',
        'https://drive.google.com/drive/folders/1YyR66S0snSfzFhza3hAUIBDUdUVcT6eO?usp=drive_link',
        ''])

      }

    }
    else if ( department === 'Civil' ) {

      if( index === 0 ) {

        setSubjects(['Engineering Mechanics'])
        setLink(['https://drive.google.com/drive/folders/17WZoLmEynq-_eer5mljo0lmX-awOodpl?usp=drive_link'])

      }
      else if( index === 1 ) {

        setSubjects(['Advanced Surveying','Concrete Technology','Building Construction and Construction Materials',
        'Theory of Structures'])
        setLink(['https://drive.google.com/drive/folders/1cQ7QTZjSOWAZnIR6W3AJK9e3pojJ1lJb?usp=drive_link',
        'https://drive.google.com/drive/folders/1aD4E-ZNW5iih3zeZmZp248OT5Ayg5Vdj?usp=drive_link',
        'https://drive.google.com/drive/folders/1mEhEw3PmIfbLMye-m0RwXR2LGqGHnhXW?usp=drive_link',
        'https://drive.google.com/drive/folders/1nfuoL2ImvGbDJq2PbwIpdydDnwpI-zTj?usp=drive_link'])

      }
      else if( index === 2 ) {

        setSubjects(['Geotechnical Engineering','Hydraulics and Irrication Egineering','Estimating & Costing'])
        setLink(['','',''])

      }
      else if( index === 3 ) {

        setSubjects(['Transportation Engineering','Design of Steel and RCC Structures',
        'Construction Management and Safety Engineering','Habitat Technology( Elective )'])
        setLink(['https://drive.google.com/drive/folders/18ey8lr5xOf4-A56-6DzaCeAlSIc8E-Lj?usp=drive_link',
        'https://drive.google.com/drive/folders/1DjY_5s53m7TR3Ypme3jRnPAdAAxIOWTP?usp=drive_link',
        'https://drive.google.com/drive/folders/1-cnqKKaYunPFIy-7QPdqBrEopipmEj2n?usp=drive_link',
        'https://drive.google.com/drive/folders/1DSD_hld7qbrAixhOQgQ0V6mYJxK6ZhSB?usp=drive_link'])

      }

    }
    else if ( department === 'Computer' ) {

      if( index === 0 ) {

        setSubjects(['Problem Solving & Programming','Fundamentals of Electrical & Electronics Engg'])
        setLink(['https://drive.google.com/drive/folders/1VQBO_IQBfIr51k0C4K1w750HSOsRWS_y?usp=drive_link',
        'https://drive.google.com/drive/folders/12vVMRBjMQt4DCe-35S9NQpo8YD6yTzVs?usp=drive_link'])

      }
      else if ( index === 1 ) {

        setSubjects(['Computer Organisation','Programming in C','Database Management System','Digital Computer Fundamentals',
        'Web Technology Lab'])
        setLink(['https://drive.google.com/drive/folders/1ip-YHVeMBvNnatPVb5GMYxCCuUw30g1C?usp=drive_link',
        'https://drive.google.com/drive/folders/1GdImpams371hOghZaH9F8exuYezoI5oT?usp=drive_link',
        'https://drive.google.com/drive/folders/1uyNbSwp9p1aliEQ2yY706MPUctLu_09e?usp=drive_link',
        'https://drive.google.com/drive/folders/1EioexAykmBgtuzksyFWl0XJey9VLHkH1?usp=drive_link',
        'https://drive.google.com/drive/folders/1t47Cq31-oKn8aeqe5gfWAnHSOwNbYz6b?usp=drive_link'])

      }
      else if ( index === 2 ) {

        setSubjects(['Object Oriented Programming','Computer Communication and Networks','Data Strucutres'])
        setLink(['https://drive.google.com/drive/folders/1k-aAQzvD7WLijW4KD1bG7RYmacNLeHj9?usp=drive_link',
        'https://drive.google.com/drive/folders/1kQ4Peq_O3aKOUyFppuqSvNlnHW90A7zt?usp=drive_link',
        'https://drive.google.com/drive/folders/1Ir8J_tFhWb8yp9yHknogfurmr1kdz6b2?usp=drive_link'])

      }
      else if ( index === 3 ) {

        setSubjects(['Project Management and Software Engineering','Embedded System and Real Time Operating System','Operating System',
        'Virtualization Technology & Cloud Computing (Elective) '])
        setLink(['https://drive.google.com/drive/folders/1it3xZuHxYzEg8YR7nlyPeHDGbJVOlMLF?usp=drive_link',
        'https://drive.google.com/drive/folders/14jbTM6cgIqyXvR1IP6_f7ZrO9FhAWIZC?usp=drive_link',
        'https://drive.google.com/drive/folders/1g3ioAAPbNzJMimOZgPge9P_CltNYuaS4?usp=drive_link',
        ''])

      }

    }
    else if ( department === 'Electronics' ) {

      if( index === 0 ) {

        setSubjects(['NILL'])
        setLink([''])

      }
      else if( index === 1 ) {

        setSubjects(['Electric Circuits & Network','Principles of Electronic Communication','Electronic Circuits','Digital Electronics'
        ,'Fundamentals of C Programming'])
        setLink(['https://drive.google.com/drive/folders/1RHS4JNrk2oyhfMoKHEt-CIOnCF6pAR_0?usp=drive_link',
        'https://drive.google.com/drive/folders/1kWoxwwV1nN2l4VcV8XFDmcvdIZD6gNOo?usp=drive_link',
        'https://drive.google.com/drive/folders/1Sp2NIQdE5QvOVUHWgWPmVmd-vjL4L5Ko?usp=drive_link',
        'https://drive.google.com/drive/folders/180OkkRddw7lyun8P5WQFvSm0lMMHUpiK?usp=drive_link',
        'https://drive.google.com/drive/folders/1Tg9-rMdyfsHSXOcAEJczOAx0HRLNjf6c?usp=drive_link'])

      }
      else if ( index === 2 ) {

        setSubjects(['Microcontroller and Application','Electronic Measurements and Instrumentation','Linear Integrated Circuits'])
        setLink(['','',''])

      }
      else if ( index === 3 ) {

        setSubjects(['Industrial Management and Safety','Embedded System','Industrail Automation','Digital Communication (Elective)'])
        setLink(['https://drive.google.com/drive/folders/15Y0MArOs2lviR7UBmkSIhJ6m96HWAxEW?usp=drive_link',
        'https://drive.google.com/drive/folders/1QhlR0lhIceq8uVgBSiDZgg18iMcCPjxv?usp=drive_link',
        'https://drive.google.com/drive/folders/1F-s0tz5T218og6TwJTExt4w81fbeZTM0?usp=drive_link',
        'https://drive.google.com/drive/folders/1EUHEIaLGAwc6xIcBWEWdLm9foe9OywVe?usp=drive_link'])

      }

    }
    else if ( department === 'EEE' ) {

      if( index === 0 ) {

        setSubjects(['NILL'])
        setLink([''])

      }
      else if ( index === 1 ) {

        setSubjects(['Analog & Digital Circuits','DC Mechines & Traction Motors','Fundamentals of Electrical Circuits',
        'Electrical & Electronics Measuring Instruments','Mechanical Engineering'])
        setLink(['https://drive.google.com/drive/folders/1laOw1zmrXbeLAamo_qKi1g7DG-1cm159?usp=drive_link',
        'https://drive.google.com/drive/folders/1C4273j7V18Q1o92CVAPiizqXM2z0EB6-?usp=drive_link',
        'https://drive.google.com/drive/folders/1GUc1juFMgYsj5uDYKwbeTwr9RdQh4HaA?usp=drive_link',
        'https://drive.google.com/drive/folders/13C_SUTDJKZ-yDBqx7BX_5_mnFmiB5RYn?usp=drive_link',
        ''])

      }
      else if ( index === 2 ) {

        setSubjects(['Power Electronics Devices and Circuits','Electrical Installation Design & Estimation','Induction Machines'])
        setLink(['https://drive.google.com/drive/folders/146tSMlhGf0-xdHtpKtRwEatGnithrQe7?usp=drive_link',
        'https://drive.google.com/drive/folders/1-boOAXp05as3xalpbcayPJ6khBVgId0T?usp=drive_link',
        'https://drive.google.com/drive/folders/15e1wOzrM03aV8PMtpOdJ4QCLC-UqPU5C?usp=drive_link'])

      }
      else if ( index === 3 ) {

        setSubjects(['Industrial Management and Safety','Synchronous Machines & FHP Motors',
        'Electricity Generation, Transmissio & Distriution','Switch gear & Protection(Elective)'])
        setLink(['https://drive.google.com/drive/folders/1IvIuEpRK2FiJdLqfA0OnyFb7QXUjOOvp?usp=drive_link',
        'https://drive.google.com/drive/folders/1a6LMKICVoz1vOAdlaspJNsHPtnGAfKeq?usp=drive_link',
        'https://drive.google.com/drive/folders/1U4PHonHQogkTHii6HW4bRbYNFWK45v5i?usp=drive_link',
        ''])

      }

    }
    else if ( department === 'Mechanical' ) {

      if( index === 0 ) {

        setSubjects(['Manufacturing Technologies','Engineering Machanics'])
        setLink(['https://drive.google.com/drive/folders/1PzsJg0BwmMgLeWTlI_8pIBRXsX4gOC0h?usp=drive_link',
        'https://drive.google.com/drive/folders/1iEfEDVgcA3g5bsq9rWCocsySogjUAHQq?usp=drive_link'])

      }
      else if ( index === 1 ) {

        setSubjects(['Strength of Materials','Material Science and Metrology','Machine Tools','Fundamentals of Electrical Engineering'])
        setLink(['https://drive.google.com/drive/folders/12k1trYXhFv9dAS5u5ZShExVkX_rXNq5C?usp=drive_link',
        'https://drive.google.com/drive/folders/1--jHSYNkCBp6-_sDD4e9v2e0HfLKsu_X?usp=drive_link',
        'https://drive.google.com/drive/folders/1fzghYKDDRb64ZPtOJIbMJ6Ty7ak0zUfu?usp=drive_link',
        'https://drive.google.com/drive/folders/1mRb4XYBmy1YOuZMsNFjCW4jUa28oUvvh?usp=drive_link'])

      }
      else if ( index === 2 ) {

        setSubjects(['Thermal Engineering','Fluid Machanics and Hydrulics Machines','Automobile Engineering','Industrial Engineering'])
        setLink(['https://drive.google.com/drive/folders/1yMTGry2YANra4OCUTTATavIaR9gV6NFs?usp=drive_link',
        'https://drive.google.com/drive/folders/1mrP30oQ2S3oR5zg_1cVCCma3VddwUJIo?usp=drive_link',
        'https://drive.google.com/drive/folders/1undGl5-knJ17AiQ0D_-JFcBjoY8Ngi_s?usp=drive_link',
        ''])

      }
      else if ( index === 3 ) {

        setSubjects(['Industrial Management and Safety','Design of Machine Elements','Refrigeration and Air Conditioning','Elective'])
        setLink(['https://drive.google.com/drive/folders/1rBW6Z0-nLh0jSIDo69CUlCxQ2nTmow78?usp=drive_link',
        'https://drive.google.com/drive/folders/17oyoEZTsxNLnTnM4zENR1gxEepGacVoU?usp=drive_link',
        'https://drive.google.com/drive/folders/14m5X6pu95guhUfIP24PGfoRN8g3JHSpt?usp=drive_link',
        ''])

      }

    }
    return () => {
      // second
    }
  }, [])

  const selectLink = (index) => {

    if(link[index]) window.open(link[index])

  }


  return (

    <div className={ small ? 'small-subjects' : 'subjects' }>

      <i class={ small ? 'bx bx-x small-exit' : 'bx bx-x exit' } onClick={returnTo}></i>
      <div className="contents">

        {

          subjects && subjects.map((sub_obj,index) =>

            <div onClick={ ()=>{ selectLink(index) } } className="subs" key={sub_obj}><p>{sub_obj}</p></div>

          )

        }

      </div>

    </div>

  )

}

export default Subjects

