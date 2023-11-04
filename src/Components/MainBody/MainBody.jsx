import Subjects from '../Subjects/Subjects';
import './MainBody.css';
import React, { useState } from 'react'

function MainBody() {

    const [general, setGeneral] = useState([])
    const [toggle_general, setToggleGeneral] = useState(false)
    const [selectedSemester, setSelectedSemester] = useState( null );

    const [automobile, setAutomobile] = useState([])
    const [toggle_automobile, setToggleAutomobile] = useState(false)

    const [civil, setCivil] = useState([])
    const [toggle_civil, setToggleCivil] = useState(false)

    const [computer, setComputer] = useState([])
    const [toggle_computer, setToggleComputer] = useState(false)

    const [electronics, setElectronics] = useState([])
    const [toggle_electronics, setToggleElectronics] = useState(false)

    const [eee, setEEE] = useState([])
    const [toggle_eee, setToggleEEE] = useState(false)

    const [mechanical, setMechanical] = useState([])
    const [toggle_mechanical, setToggleMechanical] = useState(false)

    const Department = (department) => {

        if (department === 'general') {

            setGeneral(['Semester 1', 'Semester 2'])
            if (toggle_general) setToggleGeneral(false)
            else setToggleGeneral(true)

        }
        else if (department === 'automobile') {

            setAutomobile(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_automobile) setToggleAutomobile(false)
            else setToggleAutomobile(true)

        }
        else if (department === 'civil') {

            setCivil(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_civil) setToggleCivil(false)
            else setToggleCivil(true)

        }
        else if (department === 'computer') {

            setComputer(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_computer) setToggleComputer(false)
            else setToggleComputer(true)

        }
        else if (department === 'electronics') {

            setElectronics(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_electronics) setToggleElectronics(false)
            else setToggleElectronics(true)

        }
        else if (department === 'eee') {

            setEEE(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_eee) setToggleEEE(false)
            else setToggleEEE(true)

        }
        else if (department === 'mechanical') {

            setMechanical(['Semester 2', 'Semester 3', 'Semester 4', 'Semester 5'])
            if (toggle_mechanical) setToggleMechanical(false)
            else setToggleMechanical(true)

        }

    }

    const handleSemesterClick = (department,semester) => {

        setSelectedSemester([ department , semester ])

    }
    const returnTo = () => { setSelectedSemester(null) }

    return (

        <div className='main-body' >

            <div id="listing-departments">

                <div className='departments' onClick={() => { Department('general') }} >

                    <p>General</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_general && general.map((general_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('General',index)} >

                            <p>{general_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>

                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('automobile') }} >

                    <p>Automobile Engineering</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_automobile && automobile.map((automobile_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('Automobile',index)}>

                            <p>{automobile_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>

                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('civil') }} >

                    <p>Civil Engineering</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_civil && civil.map((civil_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('Civil',index)}>

                            <p>{civil_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>
                            
                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('computer') }} >

                    <p>Computer Engineering</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_computer && computer.map((computer_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('Computer',index)}>
                            
                            <p>{computer_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>
                            
                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('electronics') }} >

                    <p>Electronics Engineering</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_electronics && electronics.map((electronics_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('Electronics',index)}>
                            
                            <p>{electronics_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>
                            
                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('eee') }} >

                    <p>Electrical & Electronics Engineering</p>
                    <i class='bx bx-chevron-down drop-down'></i>

                </div>

                {

                    toggle_eee && eee.map((eee_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('EEE',index)}>
                            
                            <p>{eee_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>
                            
                        </div>

                    )

                }

                <div className='departments' onClick={() => { Department('mechanical') }} >

                    <p>Mechanical Engineering</p>
                    <i class='bx bx-chevron-down' drop-down></i>

                </div>

                {

                    toggle_mechanical && mechanical.map((mechanical_obj,index) =>

                        <div className="semester" onClick={() => handleSemesterClick('Mechanical',index)}>
                            
                            <p>{mechanical_obj}</p>
                            <i class='bx bx-chevron-right drop-down'></i>
                            
                        </div>

                    )

                }

            </div>

            {

                selectedSemester && <Subjects department={selectedSemester[0]} index={selectedSemester[1]} returnTo={returnTo} />

            }

        </div>
    )

}

export default MainBody

