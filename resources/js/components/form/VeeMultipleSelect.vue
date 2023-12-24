<template>
    <div class="custom-select" @click="toggleDropdown">
        <div class="selected-items">
            <div v-for="item in selectedItems" :key="item.id" class="selected-item">{{ item.name }}</div>
        </div>
        <input v-model="searchTerm" @input="filterOptions" placeholder="Search">
        <div v-if="isDropdownOpen" class="dropdown">
            <div v-for="option in filteredOptions" :key="option.id" @click="selectItem(option)" class="dropdown-item">{{ option.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VeeMultipleSelect',
    props: {
        options: {
            type: Array,
            required: true
        },
        modelValue: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedItems: this.modelValue,
            searchTerm: '',
            isDropdownOpen: false
        };
    },
    computed: {
        filteredOptions() {
            return this.options.filter(option =>
                option.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }
    },
    watch: {
        modelValue(newValue) {
            this.selectedItems = newValue;
        }
    },
    methods: {
        // Các phương thức xử lý sự kiện và logic khác
        emitSelectedItems() {
            this.$emit('update:modelValue', this.selectedItems);
        }
    }
};
</script>

<style>
.custom-select {
    position: relative;
    width: 200px;
}

.selected-items {
    display: flex;
    flex-wrap: wrap;
}

.selected-item {
    background-color: #e0e0e0;
    padding: 2px 5px;
    margin: 2px;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
}

.dropdown-item {
    padding: 5px;
    cursor: pointer;
}

</style>
