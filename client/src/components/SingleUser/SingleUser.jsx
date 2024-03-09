import NoteIcon from "@mui/icons-material/Note";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import convertDateToBulgarian from "../../utils/convertDateToBulgarian.js";

export default function SingleUser({ member }) {
  // Get the current date & current member membership end date
  const currentDate = new Date();
  const userMembershipEndDate = member.endDate;

  // Convert the current date to ISO , so we can compare them , because they are not the same format
  const currentDateISO = currentDate.toISOString();

  // Calculate the remaining days until card expires
  const calculateRemainingDays = () => {
    const diffTime = new Date(userMembershipEndDate) - new Date(currentDateISO);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <tr className="text-secondary text-lg font-bold th-center">
      <td className="badge badge-default text-secondary">{member.name}</td>
      <td>{member.cardType}</td>
      <td>
        <div
          className={
            currentDateISO > userMembershipEndDate
              ? "badge badge-error text-secondary font-bold"
              : "badge badge-success text-primary font-bold"
          }
        >
          {currentDateISO > userMembershipEndDate ? "Изтекъл" : "Активен"}
        </div>
      </td>
      <td>
        <span className="badge ">
          {convertDateToBulgarian(member.startDate)}
        </span>
      </td>
      <td>
        <span className="badge ">{convertDateToBulgarian(member.endDate)}</span>
      </td>
      <td>
        <div className="badge badge-default text-secondary">
          {member.cardType === "Месечна" ||
          member.cardType === "Персонализиранa"
            ? calculateRemainingDays() + " дни"
            : member.cardType === "20 тренировки" ||
              member.cardType === "25 тренировки"
            ? calculateRemainingDays() +
              " дни" +
              " / " +
              member.workouts +
              " тренировки"
            : ""}
        </div>
      </td>
      <td className="flex gap-2 justify-center">
        <button className="tooltip" data-tip="Подновяване">
          <AutorenewIcon htmlColor="green" />
        </button>{" "}
        <button className="tooltip" data-tip="Редактиране">
          <EditIcon htmlColor="yellow" />
        </button>{" "}
        <button className="tooltip" data-tip="Изтриване">
          <DeleteIcon htmlColor="red" />
        </button>{" "}
      </td>
    </tr>
  );
}
