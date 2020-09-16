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
    // --
    korone: "",
    okayu: "",
    mio: "",
    // --
    rushia: "",
    pekora: "",
    flare: "",
    noel: "",
    marine: "",
    // --
    coco: "",
    watame: "",
    towa: "",
    kanata: "",
    luna: "",
    // --
    lamy: "",
    nene: "",
    botan: "",
    polka: "",
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

      // GAMERS
      korone_channel_id,
      okayu_channel_id,
      mio_channel_id,

      // 3rd Gen.
      rushia_channel_id,
      pekora_channel_id,
      flare_channel_id,
      noel_channel_id,
      marine_channel_id,

      // 4th Gen.
      coco_channel_id,
      watame_channel_id,
      towa_channel_id,
      kanata_channel_id,
      luna_channel_id,

      // 5th Gen.
      lamy_channel_id,
      nene_channel_id,
      botan_channel_id,
      polka_channel_id,
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

    // GAMERS
    const koroneAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${korone_channel_id}&key=${api_key}`
    )
    const okayuAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${okayu_channel_id}&key=${api_key}`
    )
    const mioPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${mio_channel_id}&key=${api_key}`
    )

    // 3rd Gen.
    const rushiaAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${rushia_channel_id}&key=${api_key}`
    )
    const pekoraAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${pekora_channel_id}&key=${api_key}`
    )
    const flareAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${flare_channel_id}&key=${api_key}`
    )
    const noelAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${noel_channel_id}&key=${api_key}`
    )
    const marineAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${marine_channel_id}&key=${api_key}`
    )

    // 4th Gen.
    const cocoAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${coco_channel_id}&key=${api_key}`
    )
    const watameAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${watame_channel_id}&key=${api_key}`
    )
    const towaAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${towa_channel_id}&key=${api_key}`
    )
    const kanataAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${kanata_channel_id}&key=${api_key}`
    )
    const lunaPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${luna_channel_id}&key=${api_key}`
    )

    // 5th Gen.
    const lamyAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${lamy_channel_id}&key=${api_key}`
    )
    const neneAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${nene_channel_id}&key=${api_key}`
    )
    const botanAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${botan_channel_id}&key=${api_key}`
    )
    const polkaAPI = Axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${polka_channel_id}&key=${api_key}`
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
      // --
      koroneAPI,
      okayuAPI,
      mioPI,
      // --
      rushiaAPI,
      pekoraAPI,
      flareAPI,
      noelAPI,
      marineAPI,
      // --
      cocoAPI,
      watameAPI,
      towaAPI,
      kanataAPI,
      lunaPI,
      // --
      lamyAPI,
      neneAPI,
      botanAPI,
      polkaAPI,
    ])
      .then(res => {
        console.log("res", res[0])
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
          // --
          korone: parseInt(res[14].data.items[0].statistics.subscriberCount),
          okayu: parseInt(res[15].data.items[0].statistics.subscriberCount),
          mio: parseInt(res[16].data.items[0].statistics.subscriberCount),
          // --
          rushia: parseInt(res[17].data.items[0].statistics.subscriberCount),
          pekora: parseInt(res[18].data.items[0].statistics.subscriberCount),
          flare: parseInt(res[19].data.items[0].statistics.subscriberCount),
          noel: parseInt(res[20].data.items[0].statistics.subscriberCount),
          marine: parseInt(res[21].data.items[0].statistics.subscriberCount),
          // --
          coco: parseInt(res[22].data.items[0].statistics.subscriberCount),
          watame: parseInt(res[23].data.items[0].statistics.subscriberCount),
          towa: parseInt(res[24].data.items[0].statistics.subscriberCount),
          kanata: parseInt(res[25].data.items[0].statistics.subscriberCount),
          luna: parseInt(res[26].data.items[0].statistics.subscriberCount),
          // --
          lamy: parseInt(res[27].data.items[0].statistics.subscriberCount),
          nene: parseInt(res[28].data.items[0].statistics.subscriberCount),
          botan: parseInt(res[29].data.items[0].statistics.subscriberCount),
          polka: parseInt(res[30].data.items[0].statistics.subscriberCount),
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
        backgroundColor: [
          "rgba(255, 0, 0, 0.5)",
          "rgba(253, 0, 0, 0.5)",
          "rgba(251, 0, 0, 0.5)",
          "rgba(250, 0, 0, 0.5)",
          "rgba(245, 0, 0, 0.5)",
          "rgba(240, 0, 0, 0.5)",
          "rgba(235, 0, 0, 0.5)",
          "rgba(230, 0, 0, 0.5)",
          "rgba(220, 0, 0, 0.5)",
          "rgba(210, 0, 0, 0.5)",
          "rgba(200, 0, 0, 0.5)",
          "rgba(190, 0, 0, 0.5)",
          "rgba(180, 0, 0, 0.5)",
          "rgba(170, 0, 0, 0.5)",
          "rgba(160, 0, 0, 0.5)",
          "rgba(150, 0, 0, 0.5)",
          "rgba(140, 0, 0, 0.5)",
          "rgba(130, 0, 0, 0.5)",
          "rgba(120, 0, 0, 0.5)",
          "rgba(110, 0, 0, 0.5)",
          "rgba(100, 0, 0, 0.5)",
          "rgba(90, 0, 0, 0.5)",
          "rgba(80, 0, 0, 0.5)",
          "rgba(70, 0, 0, 0.5)",
          "rgba(60, 0, 0, 0.5)",
          "rgba(50, 0, 0, 0.5)",
          "rgba(40, 0, 0, 0.5)",
          "rgba(30, 0, 0, 0.5)",
          "rgba(20, 0, 0, 0.5)",
          "rgba(10, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.5)",
        ],
      },
    ],
  }

  const option = {
    legend: {
      labels: {
        fontColor: "white",
      },
    },
    title: {
      display: true,
      text: "Hololive Subscriber Chart",
      fontColor: "white",
      fontSize: 18,
      fontFamily: "Poppins",
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontFamily: "Poppins",
            fontSize: 18,
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
          minHeight: "80vh",
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
