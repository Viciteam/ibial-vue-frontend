<template>
  <v-card flat>
    <v-card-title class="text-h6 font-weight-semi-bold">
      Pricing Comparison
    </v-card-title>

    <v-card flat width="664" class="overflow-auto overflow-scroll-style px-4">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left py-4">
                Packages
              </th>
              <th class="text-left py-4">
                This is the basic package

                <div class="text-caption mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum arcu, sed id morbi.
                </div>
              </th>
              <th class="text-left py-4">
                This is the standard package

                <div class="text-caption mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum arcu, sed id morbi.
                </div>
              </th>
              <th class="text-left py-4">
                This is the premium package

                <div class="text-caption mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum arcu, sed id morbi.
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td class="simple-table-td--width py-4">{{ item.package }}</td>
              <td class="text-center simple-table-td--width py-4">
                <v-icon color="primary">
                  {{ item.basic }}
                </v-icon>
              </td>
              <td class="text-center simple-table-td--width py-4">
                <v-icon color="primary">
                  {{ item.standard }}
                </v-icon>
              </td>
              <td class="text-center simple-table-td--width py-4">
                <v-icon color="primary">
                  {{ item.premium }}
                </v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          package: 'Content 1',
          basic: 'mdi-check',
          standard: 'mdi-check',
          premium: 'mdi-check'
        },
        {
          package: 'Content 2',
          basic: '',
          standard: 'mdi-check',
          premium: 'mdi-check'
        },
        {
          package: 'Content 3',
          basic: '',
          standard: '',
          premium: 'mdi-check'
        },
        {
          package: 'Content 4',
          basic: '',
          standard: '',
          premium: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.simple-table-td--width {
  min-width: 180px;
}
</style>

<style>
.overflow-scroll-style .v-data-table__wrapper {
  padding: 10px 0;
}
/* width */
.overflow-scroll-style .v-data-table__wrapper::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

/* Track */
.overflow-scroll-style .v-data-table__wrapper::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
.overflow-scroll-style .v-data-table__wrapper::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 10px;
}

/* Handle on hover */
.overflow-scroll-style .v-data-table__wrapper::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
