exports.getData = (req, res, next) => {
  // Get Slack name and Track from query object
  const { slack_name, track } = req.query;

  // Get current day of the week in string format
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const dayOfWeekIndex = today.getDay();
  const current_day = weekdays[dayOfWeekIndex];

  //   Get Current UTC time
  function getUTCDateString() {
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }
  const utc_time = getUTCDateString();
  //   console.log(utc_time);

  res.status(200).json({
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url:
      'https://github.com/Drifty-Cyber/HNG/blob/4e414cbef3b1e6d3d1ab26f22a273726978a277a/controllers/dataController.js',
    github_repo_url: 'https://github.com/Drifty-Cyber/HNG.git',
    status_code: 200,
  });
};
