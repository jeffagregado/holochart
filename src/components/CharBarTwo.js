import React, { useState, useEffect } from "react"
import { HorizontalBar } from "react-chartjs-2"
import axios from "axios"

import Loading from "./Loading"

function ChartBarTwo(props) {
  const [chartData, setChartData] = useState({})
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)

  console.log("employees", employees)

  // Chart data with sorting
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      )
      console.log("req", request.data.data)
      setEmployees(
        request.data.data.sort((a, b) => {
          return parseInt(b.employee_salary) - parseInt(a.employee_salary)
        })
      )

      setChartData({
        labels: request.data.data.map(empAge => {
          return parseInt(empAge.employee_age)
        }),
        datasets: [
          {
            label: "salary",
            data: request.data.data.map(empSal => {
              return parseInt(empSal.employee_salary)
            }),
            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
            borderWidth: 4,
          },
        ],
      })
      setLoading(true)

      return request
    }

    fetchData()
    setLoading(false)
  }, [])

  return (
    <div style={{ height: props.height, width: props.width }}>
      {loading ? (
        <HorizontalBar
          data={chartData}
          options={{
            responsive: true,
            title: { text: props.title, display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    stepSize: 1,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ChartBarTwo
