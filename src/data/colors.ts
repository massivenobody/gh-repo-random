const colors = await fetch('https://raw.githubusercontent.com/ozh/github-colors/refs/heads/master/colors.json')
    .then(res => res.json());

export default colors;