import { ITag } from "../../types/IPosts"
import { useContext, useState, createContext } from "react"

export interface IFilterProvider {
    categories: ITag[],
    addCategories: (tag: ITag) => void
    dates: string[],
    addDates: (date: ITag) => void
    deleteCategory: (id: number) => void
}

export const FilterContext = createContext<IFilterProvider>({
    categories: [],
    addCategories: (tag: any) => { return null },
    dates: [],
    addDates: (date: any) => { return null },
    deleteCategory: (id: number) => { return null },
})

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [categories, setCategories] = useState<ITag[]>([])
    const [dates, setDates] = useState<string[]>([])

    const addCategories = (tag: ITag) => setCategories([...categories, tag])

    const deleteCategory = (id: number) => {
        const result = categories.filter(tagInArr => tagInArr.id !== id)
        setCategories(result)
    }

    const addDates = (tag: any) => setDates([...dates, tag])

    return (
        <FilterContext.Provider value={{ dates, categories, addCategories, addDates, deleteCategory }}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterProvider = () => useContext(FilterContext)