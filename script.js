const ctx = document.getElementById('activityChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6'],
    datasets: [
      {
        label: 'Aerobics',
        data: [30, 45, 60, 50, 70, 40],
        backgroundColor: '#f44336'
      },
      {
        label: 'Yoga',
        data: [20, 25, 40, 35, 55, 30],
        backgroundColor: '#ffeb3b'
      },
      {
        label: 'Meditation',
        data: [15, 20, 25, 20, 30, 25],
        backgroundColor: '#03a9f4'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white'
        }
      }
    }
  }
});
