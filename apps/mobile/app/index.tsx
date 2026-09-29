import { StyleSheet, Text, View } from 'react-native';
import { tokens } from '@side-questing/design-tokens';
export default function Home() { return <View style={styles.page}><Text style={styles.label}>EXECUTIVE PROGRESSION SYSTEM</Text><Text style={styles.title}>Side Questing</Text><Text style={styles.copy}>Your quest board is being prepared.</Text></View>; }
const styles = StyleSheet.create({ page: { backgroundColor: tokens.color.bgVoid, flex: 1, justifyContent: 'center', padding: 24 }, label: { color: tokens.color.textSecondary, fontSize: 12, letterSpacing: 1 }, title: { color: tokens.color.textPrimary, fontFamily: tokens.font.tier, fontSize: 44, marginTop: 12 }, copy: { color: tokens.color.textSecondary, fontSize: 16, marginTop: 12 } });
