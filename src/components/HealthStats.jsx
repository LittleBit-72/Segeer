const HealthStats = () => {
  return (
    <View style={styles.statsRow}>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Sleep Score</Text>
        <Text style={styles.statValue}>85/100</Text>
      </View>
      <View style={styles.statBox}>
        <Text style={styles.statLabel}>Heart Rate</Text>
        <Text style={styles.statValue}>62 BPM</Text>
      </View>
    </View>
  );
};