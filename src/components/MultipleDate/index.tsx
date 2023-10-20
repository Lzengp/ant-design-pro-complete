import { DatePicker, DatePickerProps, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const MyDatePicker: any = DatePicker;

interface MultipleDateProps {
    onChange?: (value: string) => void;
    value?: string; // 多个使用英文逗号隔开
    placeholder?: string; // 输入框提示信息
}

const selectStyleObj: any = {
    position: 'relative',
    zIndex: 2,
    display: 'inlineBlock',
    width: "24px",
    height: "22px",
    lineHeight: "22px",
    background: '#1890ff',
    color: "#fff",
    margin: "auto",
    borderRadius: "2px",
    transition: "background 0.3s, border 0.3s"
};

/**
 * 通过antd的多选Select组件 和 日期组件 组合成多选日期组件，返回的参数是一个string[]
 * 此组件直观上看到选了哪些日期
*/
const MultipleDate = (props: MultipleDateProps) => {

    const { onChange, value, placeholder } = props;

    const [dateOpen, setDateOpen] = useState<boolean>(false);
    const [selectDates, setSelectDates] = useState<Array<any>>([]);

    useEffect(() => {
        if (value) {
            setSelectDates(value.split(','));
        } else {
            setSelectDates([]);
        }
    }, [value]);

    const onSelectChange = (value: string[]) => {
        setSelectDates([...value]);
    };

    const selectFocus = () => {
        setDateOpen(true);
    };

    const selectBlur = () => {
        setDateOpen(false);
    };

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        if (selectDates.includes(dateString)) {
            selectDates.splice(selectDates.findIndex(d => d == dateString), 1);
        } else {
            selectDates.push(dateString);
        }
        setSelectDates(selectDates);
        if (typeof onChange == 'function') {
            onChange(selectDates.join(','));
        }
    };

    // 渲染选中日期外观
    const dateRender = (currentDate: any) => {
        const isSelected: any = selectDates?.includes(moment(currentDate).format('YYYY-MM-DD'));
        return (<div style={isSelected ? selectStyleObj : {}} > {currentDate.date()}  </div >);
    };

    const datePickerClick = (e: any) => {
        return;
        console.log(e.target, Number(e.target.innerHTML), e.target.title);
        let a = [...selectDates]
        const title = e.target.title;
        if (!title && Number(e.target.innerHTML)) {
            selectDates.forEach((item) => {
                if (item.split('-')[2] == Number(e.target.innerHTML)) {
                    a.splice(a.findIndex(d => d == item), 1);
                }
            });
            setSelectDates([...a]);
        } else {
            a.push(title)
            setSelectDates([...a])
        }
        if (typeof onChange == 'function') {
            onChange(a.join(','));
        }
    };

    return (
        <div>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder={placeholder || "请选择日期"}
                value={[...selectDates]}
                onChange={onSelectChange}
                open={false}
                onFocus={selectFocus}
                onBlur={selectBlur}
            />
            <span onClick={datePickerClick}>
                <MyDatePicker
                    onChange={onDateChange}
                    open={dateOpen}
                    showToday={false}
                    dateRender={dateRender}
                    style={{ position: 'absolute', opacity: 0 }}
                />
            </span>

        </div>
    );
};

export default MultipleDate;