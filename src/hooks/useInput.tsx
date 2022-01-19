import { useState } from "react";

const useInput = <Type extends string>(initialValue?: Type) => {
    const [value, setValue] = useState(initialValue || "");
    const onChange = (e: { target: { value: Type } }) => setValue(e.target.value);
    return { value, onChange, setValue };
};

export default useInput;
