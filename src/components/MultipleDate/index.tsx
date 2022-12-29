import { DatePicker, DatePickerProps, Select } from "antd";
import { useEffect, useState } from "react";

const MyDatePicker: any = DatePicker;

interface MultipleDateProps {
    onChange?: (value: string) => void;
    value?: string; // 多个使用英文逗号隔开
    placeholder?: string; // 输入框提示信息
}

/**
 * 通过antd的多选Select组件 和 日期组件 组合成多选日期组件，返回的参数是一个string[]
 * 此组件的缺点就是无法直观上看到选了哪些日期
*/
const MultipleDate = (props: MultipleDateProps) => {

    const { onChange, value, placeholder } = props;

    const [dateOpen, setDateOpen] = useState<boolean>(false);
    const [selectDates, setSelectDates] = useState<Array<string>>([]);

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
    }

    const selectBlur = () => {
        setDateOpen(false);
    }

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        if (selectDates.includes(dateString)) {
            return;
        }
        selectDates.push(dateString)
        setSelectDates(selectDates);
        if (typeof onChange == 'function') {
            onChange(selectDates.join(','));
        }
    };

    return (
        <>
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
            <MyDatePicker onChange={onDateChange} open={dateOpen} showToday={false} style={{ position: 'absolute', opacity: 0 }} />
        </>
    )
}

export default MultipleDate;