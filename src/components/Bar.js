import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['HTML(5)', 'CSS(3)', 'PHP/WordPress', 'Javascript', '❤️ Node', '❤️ React', '❤️ React-Native', '❤️ Laravel', '❤️ Symfony', 'CakePHP', 'Drupal', 'Vue', 'Angular', 'Oracle JET', 'ES6', 'Flux', 'Redux', 'Mobx', 'Webpack', 'GraphQL', 'Java 7 SE/EE/ADF', 'Android', 'MySQL', 'MongoDB', 'OracleDB', 'LESS/SASS', 'Responsive designs', '❤️ PWA', '❤️ Git/Github', 'Windows', 'Linux'],
  datasets: [
    {
      label: 'Key skills',
      backgroundColor: 'rgba(0,99,132,0.2)',
      borderColor: 'rgba(0,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,99,132,0.4)',
      hoverBorderColor: 'rgba(0,99,132,1)',
      data: [95, 95, 90, 65, 45, 65, 40, 40, 40, 40, 35, 30, 30, 30, 25, 15, 25, 15, 35, 30, 25, 25, 55, 15, 25, 45, 75, 85, 60, 95, 85]
    }
  ]
};

export default class Bar extends React.Component {
  render() {
    return (
      <div className="skillsbar">
        <HorizontalBar
          data={data}
        />
      </div>
    );
  }
}