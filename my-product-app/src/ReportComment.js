import { useEffect, useRef, useState } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { API_GET } from "./api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CommentItem from "./Commentitem";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "รายงานความพึงพอใจเป็น negative-positive",
    },
  },
};

export default function ReportComment() {
  const [isLoading, setIsloading] = useState(false);
  const [chartData, setChartData] = useState({});
  const [store, setStore] = useState([]);
  const [CommentStore, setCommentStore] = useState([]);
  const chartRef = useRef();

  useEffect(() => {
    async function fetchData() {
      let json = await API_GET("report");

      setStore(json.data);

      var labels = [];
      var data = [];

      for (var i = 0; i < json.data.length; i++) {
        var item = json.data[i];
        labels.push(item.comment_type_name);
        data.push(item.comment_count);
      }

      var dataset = {
        labels: labels,
        datasets: [
          {
            label: "จำนวนความพึงพอใจเป็น negative-positive",
            data: data,
            backgroundColor: "#5B785B",
          },
        ],
      };
      setChartData(dataset);
      setIsloading(true);
    }

    fetchData();
  }, []);

  const getChart = () => {
    if (isLoading) {
      return (
        <Bar
          options={options}
          data={chartData}
          ref={chartRef}
          onClick={onClick}
        />
      );
    }

    return <></>;
  };

  const onClick = async (event) => {
    var element = getElementAtEvent(chartRef.current, event);
    var index = element[0].index;

    await getComments(store[index].comment_type_id);
  };

  const getComments = async (commentTypeId) => {
    let json = await API_GET("comments/type/" + commentTypeId);
    setCommentStore(json.data);
  };

  return (
    <>
      <div className="container-fluid mt-3">{getChart()}</div>

      <div className="container-fluid mt-3">
        {CommentStore.map((item) => (
          <CommentItem key={item.comment_id} data={item} />
        ))}
      </div>
    </>
  );
}
