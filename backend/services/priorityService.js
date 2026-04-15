function calculatePriority(clusters) {
  return clusters.map((cluster) => {
    const count = cluster.items.length;

    let priority = "Low";
    if (count > 5) priority = "High";
    else if (count > 2) priority = "Medium";

    return {
      issue: cluster.items[0].clean,
      count,
      priority,
      items: cluster.items,
    };
  });
}

module.exports = { calculatePriority };
