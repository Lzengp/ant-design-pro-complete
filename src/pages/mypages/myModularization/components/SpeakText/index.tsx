/*
 * @Description: 
 * @Author: longwei
 * @Date: 2022-10-11 10:24:30
 * @LastEditors: longwei
 * @LastEditTime: 2022-10-11 10:53:07
 */
import ProCardCode from "@/components/ProCardCode";
import { Button, Input } from "antd";
import { useState } from "react";
import { code } from "./code";

const SpeakText = () => {

    const [inputValue, setInputValue] = useState<string>('测试');

    const textToVoice = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = inputValue;
        speech.pitch = 1; // 设置话语的音调(0-2 默认1，值越大越尖锐,越低越低沉)
        speech.rate = 0.9; // 设置说话的速度(0.1-10 默认1，值越大语速越快,越小语速越慢)
        speech.volume = 10; // 设置说话的音量
        speech.lang = 'zh-CN'; // 设置播放语言
        speechSynthesis.speak(speech);
    }

    return (
        <>
            <h3>输入文字，转成语音，使用SpeechSynthesisUtterance实现</h3>
            <Input value={inputValue} onChange={(val) => { setInputValue(val.target.value) }} style={{ width: '300px', marginRight: '20px' }} />
            <Button type='primary' onClick={textToVoice}>文字转语音</Button>
            <ProCardCode code={code} />
        </>
    )
}

export default SpeakText;