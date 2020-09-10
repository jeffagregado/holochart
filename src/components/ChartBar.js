import React, { useState, useEffect } from "react"
import { HorizontalBar } from "react-chartjs-2"
import Axios from "axios"

import Loading from "./Loading"

function ChartBar() {
  const [chartData, setChartData] = useState({})
  const [loading, setLoading] = useState(false)

  const chart = () => {
    let empSal = []
    let empAge = []
    Axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        for (const dataObj of res.data.data) {
          console.log(res)
          empSal.push(parseInt(dataObj.employee_salary))
          empAge.push(parseInt(dataObj.employee_age))
        }
        setLoading(true)

        const employee = [
          {
            salary: empSal,
            age: empAge,
          },
        ]

        //employee.sort((a, b) => a.age - b.age)

        //console.log(employee)

        setChartData({
          labels: employee.age,
          datasets: [
            {
              label: "salary",
              data: employee.salary,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        })
      })
      .catch(err => {
        console.log(err)
      })
    setLoading(false)
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div style={{ height: "1000px", width: "1000px" }}>
      {loading ? (
        <HorizontalBar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "This is a title", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
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

export default ChartBar
