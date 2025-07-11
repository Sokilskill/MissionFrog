import { useDispatch, useSelector } from "react-redux";
import {
  setStatusFilter,
  setPriorityFilter,
  setSortBy,
} from "../redux/filters/filtersSlice";
import { selectFilters } from "../redux/filters/filtersSelector";

const Filter = () => {
  const dispatch = useDispatch();
  const { priority, status, sortBy } = useSelector(selectFilters);

  return (
    <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="font-semibold text-lg mb-4">Фільтри</h2>
      <div className="space-y-3">
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Статус
          </label>
          <select
            id="status"
            onChange={(e) => dispatch(setStatusFilter(e.target.value))}
            value={status}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="all">Всі</option>
            <option value="pending">Активні</option>
            <option value="completed">Завершені</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium mb-1">
            Пріоритет
          </label>
          <select
            id="priority"
            onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            value={priority}
          >
            <option value="all">Всі</option>
            <option value="high">Високий</option>
            <option value="medium">Середній</option>
            <option value="low">Низький</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium mb-1">
            Сортування
          </label>
          <select
            id="sort"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            value={sortBy}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="date-asc">Дата (старі → нові)</option>
            <option value="date-desc">Дата (нові → старі)</option>
            <option value="priority">Пріоритет</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
