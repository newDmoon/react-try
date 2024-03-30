import Select from "./UI/select/Select"
import Input from "./UI/input/Input"

export default function PostFilter({ filter, setFilter }) {

    return (
        <section>
            <h1>Фильтрация</h1>
            <Input
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Поиск"
            />
            <Select
                value={filter.sort}
                defaultValue="Сортировка"
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По содержимому" },
                ]}
            />

        </section>
    )
}