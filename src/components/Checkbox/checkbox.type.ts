

export type CheckboxType = {
    // value: string[],
    // checked: boolean,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    options: string[],
    setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>
}