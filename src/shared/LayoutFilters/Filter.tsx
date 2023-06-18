import { Col } from "antd"
import DateRangePickerComp from "../datePicker/DatePicker"

const FilterValues = ({ showDatePicker }: any) => {
    return (<>  <Col lg={3} md={24} xs={24} sm={24}> {showDatePicker && <DateRangePickerComp />}</Col></>)
}
export default FilterValues