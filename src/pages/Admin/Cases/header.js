import { useCaseContext } from "../../../context/CaseContext";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import request from "../../../services";
import Popup from "../../../components/Reusable/Popup";
import Toast from "../../../components/Reusable/Toast";
import { PenIcon, TrasIcon } from "../../../components/Reusable/GenericIcons/genericIcons";

const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [, dispatch] = useCaseContext();

	const getAdmins = async () => {
		try {
			const res = await request.get('admin/directions/all');
			dispatch({
				type: 'setDirections',
				payload: res?.data?.data,
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};
	const deleteF = async () => {
		try {
			const res = await request.delete(`/admin/directions/${data?.id}`);
			getAdmins();
			Toast({
				type: 'success',
				message: 'Deleted !',
			});
		} catch (error) {
			Popup({
				title: error?.response?.data?.resultMsg,
				type: 'warning',
			});
		}
	};

	const deleteFunc = async () => {
		Popup({
			title: 'Do you want to delete this direction ?',
			isConfirmedFunction: () => deleteF(),
			showCancelButton: true,
			type: 'question',
		});
	};
	const editFunc = () => {
		dispatch({
			type: 'setSelected',
			payload: data,
		});
		navigate(`/admin/direction/edit/:${data?.id}`);
	};
	return (
		<Wrapper.Flex>
			<Wrapper.Box onClick={deleteFunc}>
				<TrasIcon />
			</Wrapper.Box>
			<Wrapper.Box onClick={editFunc}>
				<PenIcon />
			</Wrapper.Box>
		</Wrapper.Flex>
	);
};

export const column = [
  {
    headerName: "Cover",
	cellRender: ActionRenderer,
    flex: 0.5,
  },

  {
    headerName: "Project name",
    flex: 1.5,
  },

  {
    headerName: "Project type",
    flex: 1,
  },
  {
    headerName: "Link",
    flex: 0.5,
  },
  {
    headerName: "Status",
    flex: 0.6,
  },
  {
    headerName: "Action",
    flex: 0.5,
  },
];
