import React, { useEffect, useState } from "react"
import config from "./config"
import holoChannel from "./holoChannel"
// import numeral from "numeral"
import Axios from "axios"
import { HorizontalBar } from "react-chartjs-2"
import Loading from "../Loading"

function YoutubeSubCounter() {
  const [loading, setLoading] = useState(false)
  const [subCount, setSubCount] = useState({
    sora: "",
    roboco: "",
    miko: "",
    suisei: "",
    // --
    fubuki: "",
    haachama: "",
    mel: "",
    matsuri: "",
    aki: "",
    // --
    subaru: "",
    choco: "",
    aqua: "",
    shion: "",
    ayame: "",
  })

  // sort objects with values/int
  const newSubCount = Object.entries(subCount)
  const sortSubs = newSubCount
    .sort(([c1, v1], [c2, v2]) => {
      return v2 - v1
    })
    .reduce((o, [k, v]) => ((o[k] = v), o), {})

  useEffect(() => {
    const { api_key } = config
    const {
      // 0 Gen.
      sora_channel_id,
      roboco_channel_id,
      miko_channel_id,
      suisei_channel_id,

      // 1st Gen.
      fubuki_channel_id,
      haachama_channel_id,
      mel_channel_id,
      matsuri_channel_id,
      aki_channel_id,

      // 2nd Gen.
      subaru_channel_id,
      choco_channel_id,
      aqua_channel_id,
      shion_channel_id,
      ayame_channel_id,
    } = holoChannel

    // 0 Gen.
    const soraAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${sora_channel_id}&key=${api_key}`
    )
    const robocoAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${roboco_channel_id}&key=${api_key}`
    )
    const mikoAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${miko_channel_id}&key=${api_key}`
    )
    const suiseiAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${suisei_channel_id}&key=${api_key}`
    )

    // 1st Gen.
    const fubukiAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${fubuki_channel_id}&key=${api_key}`
    )
    const haachamaAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${haachama_channel_id}&key=${api_key}`
    )
    const melAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${mel_channel_id}&key=${api_key}`
    )
    const matsuriAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${matsuri_channel_id}&key=${api_key}`
    )
    const akiAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${aki_channel_id}&key=${api_key}`
    )

    // 2nd Gen.
    const subaruAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${subaru_channel_id}&key=${api_key}`
    )
    const chocoAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${choco_channel_id}&key=${api_key}`
    )
    const aquaAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${aqua_channel_id}&key=${api_key}`
    )
    const shionAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${shion_channel_id}&key=${api_key}`
    )
    const ayameAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ayame_channel_id}&key=${api_key}`
    )

    Promise.all([
      soraAPI,
      robocoAPI,
      mikoAPI,
      suiseiAPI,
      // --
      fubukiAPI,
      haachamaAPI,
      melAPI,
      matsuriAPI,
      akiAPI,
      // --
      subaruAPI,
      chocoAPI,
      aquaAPI,
      shionAPI,
      ayameAPI,
    ])
      .then(res => {
        setSubCount({
          sora: parseInt(res[0].data.items[0].statistics.subscriberCount),
          roboco: parseInt(res[1].data.items[0].statistics.subscriberCount),
          miko: parseInt(res[2].data.items[0].statistics.subscriberCount),
          suisei: parseInt(res[3].data.items[0].statistics.subscriberCount),
          // --
          fubuki: parseInt(res[4].data.items[0].statistics.subscriberCount),
          haachama: parseInt(res[5].data.items[0].statistics.subscriberCount),
          mel: parseInt(res[6].data.items[0].statistics.subscriberCount),
          matsuri: parseInt(res[7].data.items[0].statistics.subscriberCount),
          aki: parseInt(res[8].data.items[0].statistics.subscriberCount),
          // --
          subaru: parseInt(res[9].data.items[0].statistics.subscriberCount),
          choco: parseInt(res[10].data.items[0].statistics.subscriberCount),
          aqua: parseInt(res[11].data.items[0].statistics.subscriberCount),
          shion: parseInt(res[12].data.items[0].statistics.subscriberCount),
          ayame: parseInt(res[13].data.items[0].statistics.subscriberCount),
        })
        setLoading(true)
      })
      .catch(error => {
        console.log(error)
      })
    setLoading(false)
  }, [])

  const data = {
    labels: Object.keys(sortSubs).map(
      key => key.replace(/\b\w/g, l => l.toUpperCase()) // capitalize the first letter
    ),
    datasets: [
      {
        label: "Subscriber",
        data: Object.keys(sortSubs).map(key => sortSubs[key]),
      },
    ],
  }

  const option = {
    title: {
      display: true,
      text: "Hololive Subscriber Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
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
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  }
  return (
    <>
      <div
        style={{
          width: "1000px",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: "1",
        }}
      >
        {loading ? <HorizontalBar data={data} options={option} /> : <Loading />}
      </div>
    </>
  )
}

export default YoutubeSubCounter
