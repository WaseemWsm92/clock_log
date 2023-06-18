import React, { useCallback, useMemo, useState } from 'react'
// Ant
import { Checkbox, Input } from 'antd'

import searchIcon from "../../../../../../assets/icons/search-icon.svg";


const ExceptionModalTabChild = ({ renderChild, selectedValues, setSelectedValues, selectedTeamValues, setSelectedTeamValues }: any) => {

    // const [selectedValues, setSelectedValues] = useState<any>([]);
    // const [teamSelectedValues, setTeamSelectedValues] = useState<any>([]);

    const [searchText, setSearchText] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = [
        { label: "Basit", value: "Basit" },
        { label: "Ali", value: "Ali" },
        { label: "Nouman", value: "Nouman" },
        { label: "Zahir", value: "Zahir" },
        { label: "Ahmed", value: "Ahmed" },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const teamoptions = [
        { label: "Clock Log", value: "ClockLog" },
        { label: "Buzz HR", value: "BuzzHR" },
        { label: "0 code", value: "0code" },
        { label: "Foster App", value: "FosterApp" },
        { label: "Ppcn", value: "Ppcn" },
    ];



    const selectOptions = useMemo(
        () =>
            options.filter((option) =>
                option.label.toLowerCase().includes(searchText.toLowerCase())
            ),
        [options, searchText]
    );
    const selectOptionsTeams = useMemo(
        () =>
            teamoptions.filter((option) =>
                option.label.toLowerCase().includes(searchText.toLowerCase())
            ),
        [teamoptions, searchText]
    );



    const handleSearchTextChange = useCallback((event: any) => {
        setSearchText(event.target.value);
        //
    }, []);



    //check and unchecked checkboxes
    const handleOptionSelect = (value: any, option: any) => {
        const newSelectedValues = [...selectedValues];
        if (newSelectedValues.includes(value)) {
            const index = newSelectedValues.indexOf(value);
            newSelectedValues.splice(index, 1);
        } else {
            newSelectedValues.push(value);
        }
        setSelectedValues(newSelectedValues);
    };


    return (
        <div>
            {(renderChild?.key === "Users" || renderChild?.key === undefined) ? (
                <>
                    <Input placeholder="Search" className="fs-14 fw-400 border-color" value={searchText} onChange={handleSearchTextChange} prefix={<img src={searchIcon} alt="search" width={24} height={24} style={{ marginRight: "0.55rem" }} />} style={{ width: "100%", height: "40px", }} />
                    <div style={{ maxHeight: "300px", overflowY: "auto", marginTop: '1.5rem' }}>
                        {selectOptions.map((option: any) => (
                            <div key={option.value} style={{ marginBottom: "0.563rem" }}>
                                <Checkbox
                                    value={option.value}
                                    checked={selectedValues.includes(option.value)}
                                    onChange={() => handleOptionSelect(option.value, option)}
                                >
                                    {option.label}
                                </Checkbox>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                    <>
                        <Input placeholder="Search" className="fs-14 fw-400 border-color" value={searchText} onChange={handleSearchTextChange} prefix={<img src={searchIcon} alt="search" width={24} height={24} style={{ marginRight: "0.55rem" }} />} style={{ width: "100%", height: "40px", }} />
                        <div style={{ maxHeight: "300px", overflowY: "auto", marginTop: '1.5rem' }}>
                            {selectOptionsTeams.map((option: any) => (
                                <div key={option.value} style={{ marginBottom: "0.563rem" }}>
                                    <Checkbox
                                        value={option.value}
                                        checked={selectedValues.includes(option.value)}
                                        onChange={() => handleOptionSelect(option.value, option)}
                                    >
                                        {option.label}
                                    </Checkbox>
                                </div>
                            ))}
                        </div>
                    </>
            )}
            {/* <Input placeholder="Search" className="fs-14 fw-400 border-color" value={searchText} onChange={handleSearchTextChange} prefix={<img src={searchIcon} alt="search" width={24} height={24} style={{ marginRight: "0.55rem" }} />} style={{ width: "100%", height: "40px", }} />
            <div style={{ maxHeight: "300px", overflowY: "auto", marginTop:'1.5rem' }}>
                {selectOptions.map((option: any) => (
                    <div key={option.value} style={{ marginBottom:"0.563rem"}}>
                        <Checkbox
                            value={option.value}
                            checked={selectedValues.includes(option.value)}
                            onChange={() => handleOptionSelect(option.value, option)}
                        >
                            {option.label}
                        </Checkbox>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default ExceptionModalTabChild