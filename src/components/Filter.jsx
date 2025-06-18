const Filter = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
      <h2 className="font-semibold text-lg mb-4">Фільтри</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Статус</label>
          <select
            id="status-filter"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="all">Всі</option>
            <option value="pending">Активні</option>
            <option value="completed">Завершені</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Пріоритет</label>
          <select
            id="priority-filter"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="all">Всі</option>
            <option value="high">Високий</option>
            <option value="medium">Середній</option>
            <option value="low">Низький</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Сортування</label>
          <select
            id="sort-by"
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700"
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
