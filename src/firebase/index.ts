import admin, { ServiceAccount } from "firebase-admin";

// const serviceAccount = require("./next-fairebase-test-firebase-adminsdk-4daie-ec58f2da97.json");
const serviceAccount = {
  type: "service_account",
  project_id: "next-fairebase-test",
  private_key_id: "ec58f2da9790928662c5f56078388648acfc0486",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDAl37q0pM5Ukx/\nLy8fgIJ6ZDT8RBu7iZARqGO+6c5HaxybkRBIKbmpk+k8H1QE1JecMuGi9RQ+u4gq\n+W874D4fGGK1HyGB6pXQTPcdYjd33irfdpqnaffJGMk5KfbTvResPWGiXF4Qjcy6\nZM1PUAzu81YeYLTyfrrgupxkW60eNRmUW2e9q9OrtSUSIboCCgQeqZ0O8GbWw+wz\nY25JKBQo43kGaJR/pzc4n+0RKUJsDMCZx3TNh+liwhF2kilYKN3YXmWlEsJPLSf2\nu8vqvVllEmr9HWHy9zpom8/KOam//zkYH59QaTo/zdqeSrBXkWyLzlqbwGuHyLcm\n0t+D4F2vAgMBAAECggEAB8V1MRuLJkp8XLt2LtK8MR0fCDjlV5Vu8090quz7TmVz\nk5Fwc0D/xWh7BlqLROChN4PUGAPEq91cWsOS6fsb9pxAy2c0rm3dWrjoVc6zR0p3\nN2otRmkfvwUZhY18cMHWFTSq3mbUwt098B2GLVehFflKtdIYKxrTBqNxERmj7C6N\nYPvzPMTjkNYmSZRoj2bjXDK0p0Zop0A6Fzal+ddCUlv/iIPYqnSLdeeC+V4Bztpv\n4cDP9twvih8Vqnobb6d+gZpQ41Hc8DcfI5hcP5+WKHnPTqKet9RRqLMziCYfOGXj\nb3jI23rdHemGdQMMl6GMFxuhzMxi70JrKUqtxjGAXQKBgQDuggxAmGBLW2GYKgJV\nw9qy6sg4QvbkcSlbvA4S0FRRGVScEitRi+Pgck24iQEyZryS7cMHaZQP3CJqIBy5\nqylJ5FIpaIRVMPlaQbL3awgRKmEViEMq+qX/5m6zo68KmvwpW+Mb0d1JR3IHziFp\nFfG4SG/ctebuRvm/7g83T87DDQKBgQDOt2CzlotXvpDpn5jRy7fiHGYgmYiLk++4\nKW5QiLqTtjmKSBV1EV1pah4KC9xw746L2DCY+/hDmBW6QdAaLANKFPqFW/5bGs7y\neNJw427UWRetaKl83i0rgH7jMgveWynlcfdENPQkZSdFbSEi/ExVefIH8rTf4g0G\ncrelmh9kqwKBgHgDRkkGo4WnsL8RfGVNjPF0hFUTFQq0ClyXjvlWjObV+SYjWlrJ\nKlwZCBSwE8MZwQ+pxfYn4RHt8f82s12Vy8vbsKAXcGcxoncREg2/dKq2iW19SFcL\nEpZmjBOmbIDIpdPl4axw+IlUAwP8bAFlwmC5Slhjy5Tgb/Fsx4lMhjzNAoGBALVk\n+2l8EHiF1Bn+H5bx4kF7VC8FK2n3/iKn0JLA+KCIBkQO7y1UeJj5MrT0JZPA02Bp\n7HNCoF+IRIC2IcvllVlbwV5nFHOTucfSODAxk16pc3qK3jehqxeCYVYy43FSpBgg\ngq+KnDaXwPdORQazSLS1Fqrc0tWnQnDHF9osvaGTAoGAbpYOToKG7Cykb6gxk4r6\n9nrtgRdrBFOaPXBVXyhLzGkQDonv3aIxf74i3LZRK5YuV36+T/+mEeu621gr6Wir\n/bFZ5/EVTiQHSS73eU3QsoS2kvr0DFaZbB0An3zW2hnm6BQzQqgct2J2L257zJvR\nkieZnhUvX0tWhaRJtdCvISo=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-4daie@next-fairebase-test.iam.gserviceaccount.com",
  client_id: "110268256899579873506",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4daie%40next-fairebase-test.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
} as ServiceAccount;

export default async function decodeFirebaseIdToken(idToken: string) {
  await admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  return admin.auth().verifyIdToken(idToken);
}
