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
  const utcTime = today.toISOString();

  res.status(200).json({
    slack_name,
    current_day,
    utcTime,
    track,
    github_file_url:
      'https://github.com/Drifty-Cyber/HNG/blob/4e414cbef3b1e6d3d1ab26f22a273726978a277a/controllers/dataController.js',
    github_repo_url: 'https://github.com/Drifty-Cyber/HNG.git',
    status_code: 200,
  });
};
