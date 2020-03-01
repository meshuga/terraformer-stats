import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class App extends React.Component {
  state = {
    stats: []
  };

  async componentDidMount() {
    var response = await axios.get("https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases");
    this.setState({
      stats: response.data
    })
  }

  render() {
    const { stats } = this.state;

    var versions = [];

    stats.forEach(elem => {
      const map = {};
      var totalCount = 0;
      elem.assets.forEach(asset => {
        var key = "all";
        if (asset.name.split("-").length === 4) {
          key = asset.name.split("-")[1];
        }
        const stat = map[key];
        if (!stat) {
          map[key] = asset.download_count;
        } else {
          map[key] = stat + asset.download_count;
        }
        totalCount += asset.download_count;
      })

      versions.push({
        name: elem.tag_name,
        published_at: elem.published_at,
        assets: map,
        totalCount: totalCount,
      });

    });
    return (
      <div className="App">
        <header>
          <h1>
            Terraformer download stats
          </h1>
        </header>
        <main id="container">
          <LineChart width={1200} height={500} data={versions}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis name="Version" dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" name="Sum" dataKey="totalCount" stroke="#000000" activeDot={{ r: 8 }} />
            <Line type="monotone" name="AWS" dataKey="assets.aws" stroke="#F7832A" activeDot={{ r: 8 }} />
            <Line type="monotone" name="Google" dataKey="assets.google" stroke="#E5B832" activeDot={{ r: 8 }} />
            <Line type="monotone" name="Azure" dataKey="assets.azure" stroke="#3BB8CE" activeDot={{ r: 8 }} />
            <Line type="monotone" name="Kubernetes" dataKey="assets.kubernetes" stroke="#615CD1" activeDot={{ r: 8 }} />
            <Line type="monotone" name="AliCloud" dataKey="assets.alicloud" stroke="#ACACAC" activeDot={{ r: 8 }} />
            <Line type="monotone" name="Cross cloud" dataKey="assets.all" stroke="#2284d8" activeDot={{ r: 8 }} />
          </LineChart>
          <h3>Legend</h3>
          <p>Diagram shows download stats of <a href="https://github.com/GoogleCloudPlatform/terraformer">Terraformer</a> tool across releases. Each release starting from version 0.8.4 provides separate builds per Terraform provider which can give some insight into cloud popularity.</p>
          <ul>
            <li>Sum - total number of downloads of the tool</li>
            <li>Cross cloud - total number of downloads of the tool for all clouds</li>
            <li>_Provider_ - total number of downloads of the tool for a given provider</li>
          </ul>
          <h3>Version details</h3>
          <table>
            <tr>
              <th>Version</th>
              <th>Release date</th>
            </tr>
            {
              versions.map(version => {
                return (<tr>
                  <td>{version.name}</td>
                  <td>{new Date(Date.parse(version.published_at)).toDateString()}</td>
                </tr>)
              })
            }
          </table>
          <h3>Source</h3>
          <a href="https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases">https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases</a>
        </main>
      </div>
    );
  }
}

export default App;
