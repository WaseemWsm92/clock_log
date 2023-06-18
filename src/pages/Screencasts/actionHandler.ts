export const handleSelectInnerCheckboxClick = (id: any, selected: any[]) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: any = [];
    if (selectedIndex === -1) { newSelected = newSelected.concat(selected, id); }
    else if (selectedIndex === 0) { newSelected = newSelected.concat(selected.slice(1)); }
    else if (selectedIndex === selected.length - 1) { newSelected = newSelected.concat(selected.slice(0, -1)); }
    else if (selectedIndex > 0) { newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1)); }
    return newSelected;
}

export const isSelected = (id: string, selectedArray: any) => selectedArray.length > 0 && selectedArray.includes(id) !== -1;