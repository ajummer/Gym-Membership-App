import SingleUser from "../SingleUser/SingleUser.jsx";
import Search from "../Search/Search.jsx";
import Sort from "../Sort/Sort.jsx";

export default function List() {
  return (
    <div className="overflow-x-auto h-max ">
      <h1 className="text-center text-md mb-5 font-bold text-secondary">
        Списък с членове
      </h1>
      <div className="flex  justify-between align-baseline mb-2 gap-5 ">
        <Search />
        <Sort />
      </div>
      <table className="table table-zebra  border-black table-xs phone:table-sm  tablet:table-md laptop:tablet-lg ">
        {/* head */}
        <thead>
          <tr className="text-base th-center bg-secondary text-primary  ">
            <th>Име</th>
            <th>Вид карта</th>
            <th>Статус</th>
            <th>Начална дата</th>
            <th>Крайна дата</th>
            <th>Оставащи тренировки</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
          <SingleUser />
        </tbody>
      </table>
      <div className="join grid grid-cols-2">
        <button className="join-item btn btn-outline">Предишна страница</button>
        <button className="join-item btn btn-outline">Следваща страница</button>
      </div>
    </div>
  );
}
