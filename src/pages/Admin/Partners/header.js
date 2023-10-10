import Swal from "sweetalert2";
import { PenIcon, TrasIcon} from "../../../components/Reusable/GenericIcons/genericIcons";
import Popup from "../../../components/Reusable/Popup";
import Toast from "../../../components/Reusable/Toast";
import { usePartnersContext } from "../../../context/useContext";
import request from "../../../services";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import Switch from "../../../components/Reusable/Switch";

const ActionRenderer = ({ data }) => {
	const navigate = useNavigate();
	const [,dispatch] = usePartnersContext();

	const getPartners = async () => {
		try {
		  const res = await request.get(`admin/partner/all`);
		  dispatch({
			type: "setPartner",
			payload: res?.data?.data,
		  });
		} catch (error) {
		  console.error("Error", error);
		}
	  };
	const deleteF = async () => {
		
		try {
			const res = await request.delete(`admin/partner/${data?.id}`);
			getPartners();
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
		navigate(`/admin/partner/edit/:${data?.id}`);
	};
	return (
		<Wrapper.Flex>
			<Wrapper.Box onClick={deleteFunc}>
				<TrasIcon/>
			</Wrapper.Box>
			<Wrapper.Box onClick={editFunc}>
				<PenIcon />
			</Wrapper.Box>
		</Wrapper.Flex>
	);
};
const RendererStatus = ({ data }) => {
	const statusChange = async (v) => {
		try {
			const res = await request.post('admin/partner', {
				data: {
					...data,
					isActive: v,
				},
				transactionTime: '2023-08-14T15:43:01.8152087',
			});
			Toast({
				type: 'success',
				message: 'Changed',
			});
		} catch (error) {
			Swal.fire(error?.response?.data?.resultMsg);
		}
	};

	return (
		<Wrapper.Flex>
			<Switch
				onClick={(e) => statusChange(e)}
				checked={data?.isActive ? 1 : 0}
			/>{' '}
			Active
		</Wrapper.Flex>
	);
};

const Renderer = (val) => {
	return <h5>{val?.createdAt}</h5>;
};

const RendererPhoto = ({ data }) => {
	return (
		<Wrapper.Flex>
			<img className="blogImgRen" src={data?.partnerPhotoUrl} alt="Partner image" />
		</Wrapper.Flex>
	);
};
export const column = [
  {
    headerName: "Logo",
	cellRenderer:RendererPhoto,
    flex: 3,
  },

  {
    headerName: "Added date",
	cellRenderer: Renderer,
    flex: 1.5,
  },

  {
    headerName: "Status",
	cellRenderer: RendererStatus,
    flex: 0.7,
  },
  {
    headerName: "Action",
	cellRenderer: ActionRenderer,
    flex: 0.7,
  },
];
